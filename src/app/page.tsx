"use client";

import Image from "next/image";
import Link from "next/link";

import * as yup from "yup";
import { useFormik } from "formik";

import { Button, InputBasic, InputPassword } from "@/components/formElements";

export default function Home() {
	let schema = yup.object({
		email: yup
			.string()
			.email("Formato de email invalido.")
			.required("Campo obligatorio."),
		password: yup
			.string()
			.matches(
				/^(?=.*[A-Za-z0-9])(?=.*[$-_.])(.*){1,}$/,
				"Debe contener caracteres alfanuméricos."
			)
			.min(8, "Debe tener mínimo 8 caracteres.")
			.max(20, "Debe tener máximo 20 caracteres.")
			.required("Campo obligatorio"),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		enableReinitialize: true,
		validationSchema: schema,
		onSubmit: async (values) => {
			let resp;
		},
	});

	return (
		<main className="min-h-screen grid grid-cols-2">
			<figure className="relative h-full w-full">
				<Image
					src={"/assets/login.png"}
					alt={"Imagen de fondo del login"}
					fill
				/>
			</figure>
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
							label={"Email"}
							placeholder={"hello@example.com"}
							value={formik.values.email ? formik.values.email : ""}
							change={formik.handleChange}
							blur={formik.handleBlur}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helpertext={formik.touched.email && formik.errors.email}
						/>
						<InputPassword
							name={"password"}
							label={"Contraseña"}
							placeholder={"********"}
							value={formik.values.password ? formik.values.password : ""}
							change={formik.handleChange}
							blur={formik.handleBlur}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helpertext={formik.touched.password && formik.errors.password}
						/>
					</div>
					<div className="w-full">
						<Button text="Login" type="submit" />
						<div className="w-full">
							<p className="text-center">
								¿Olvidaste tu contraseña?{" "}
								<Link
									href={"/recuperar"}
									className="font-bold underline underline-offset-2"
								>
									Click aquí
								</Link>
							</p>
						</div>
					</div>
				</div>
			</form>
		</main>
	);
}
