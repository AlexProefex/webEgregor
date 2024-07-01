import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";

import * as yup from "yup";
import { useFormik } from "formik";

import { Button, InputBasic } from "@/components/formElements";

interface Props {
	setRecoveryState: Dispatch<SetStateAction<number>>
}

export function InsertCode({ setRecoveryState }: Props) {
	let schema = yup.object({
		code: yup
			.number()
			.typeError("Solo se aceptan números.")
			.required("Campo obligatorio."),
	});

	const formik = useFormik({
		initialValues: {
			code: "",
		},
		enableReinitialize: true,
		validationSchema: schema,
		onSubmit: async (values) => {
			setRecoveryState(3)
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
						name={"code"}
						type={"text"}
						label={"Ingresa el código que hemos enviado a tu correo."}
						placeholder={"000000"}
						value={formik.values.code ? formik.values.code : ""}
						change={formik.handleChange}
						blur={formik.handleBlur}
						error={formik.touched.code && Boolean(formik.errors.code)}
						helpertext={formik.touched.code && formik.errors.code}
					/>
				</div>
				<div className="w-full">
					<Button text="Continuar" type="submit" />
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
