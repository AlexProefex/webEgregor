import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

import * as yup from "yup";
import { useFormik } from "formik";

import { Button, InputPassword } from "@/components/formElements";

interface Props {
	setRecoveryState: Dispatch<SetStateAction<number>>
}

export function ResetPassword({ setRecoveryState }: Props) {
	let schema = yup.object({
		password: yup
			.string()
			.matches(
				/^(?=.*[A-Za-z0-9])(?=.*[$-_.])(.*){1,}$/,
				"Debe contener caracteres alfanuméricos."
			)
			.min(8, "Debe tener mínimo 8 caracteres.")
			.max(20, "Debe tener máximo 20 caracteres.")
			.required("Campo obligatorio"),
		repeatedPassword: yup
			.string()
			.oneOf([yup.ref("password")], "Las contraseñas no  coinciden")
			.required("Campo obligatorio"),
	});

	const formik = useFormik({
		initialValues: {
			password: "",
			repeatedPassword: "",
		},
		enableReinitialize: true,
		validationSchema: schema,
		onSubmit: async (values) => {
			setRecoveryState(4)
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="flex flex-col justify-center items-center"
		>
			<div className="w-full max-w-[420px] flex flex-col gap-y-[40px]">
				<Image
					src={"/assets/logo.png"}
					alt="logo de Egregor"
					width={163}
					height={90}
					className="mx-auto"
				/>
				<div className="flex flex-col gap-y-[20px]">
					<InputPassword
						name={"password"}
						label={"Nueva contraseña"}
						placeholder={"********"}
						value={formik.values.password ? formik.values.password : ""}
						change={formik.handleChange}
						blur={formik.handleBlur}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helpertext={formik.touched.password && formik.errors.password}
					/>
					<InputPassword
						name={"repeatedPassword"}
						label={"Repetir contraseña"}
						placeholder={"********"}
						value={
							formik.values.repeatedPassword
								? formik.values.repeatedPassword
								: ""
						}
						change={formik.handleChange}
						blur={formik.handleBlur}
						error={
							formik.touched.repeatedPassword &&
							Boolean(formik.errors.repeatedPassword)
						}
						helpertext={
							formik.touched.repeatedPassword && formik.errors.repeatedPassword
						}
					/>
				</div>
				<div className="w-full">
					<Button text="Guardar" type="submit" />
					<div className="w-full">
						<p className="text-center">
							Iniciar sesión{" "}
							<Link
								href={"/"}
								className="font-bold underline underline-offset-2"
							>
								Click aquí
							</Link>
						</p>
					</div>
				</div>
			</div>
		</form>
	);
}
