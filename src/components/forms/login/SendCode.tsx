import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

import * as yup from "yup";
import { useFormik } from "formik";

import { Button, InputBasic } from "@/components/formElements";

interface Props {
	setRecoveryState: Dispatch<SetStateAction<number>>
}

export function SendCode({ setRecoveryState }: Props) {
	let schema = yup.object({
		email: yup
			.string()
			.email("Formato de email invalido.")
			.required("Campo obligatorio."),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
		},
		enableReinitialize: true,
		validationSchema: schema,
		onSubmit: async (values) => {
			setRecoveryState(2)
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
					<InputBasic
						name={"email"}
						type={"text"}
						label={"Ingresa tu correo para enviarte el código."}
						placeholder={"hello@example.com"}
						value={formik.values.email ? formik.values.email : ""}
						change={formik.handleChange}
						blur={formik.handleBlur}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helpertext={formik.touched.email && formik.errors.email}
					/>
				</div>
				<div className="w-full">
					<Button text="Enviar código" type="submit" />
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
