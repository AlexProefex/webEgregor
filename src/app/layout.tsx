import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LMS Egregor",
	description: "Sistema de Gestion de aprendizaje de Egregor",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${lexend.className} min-w-[1024px]`}>{children}</body>
		</html>
	);
}
