import { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

interface Props {}

export function FinalStep() {
	const [seconds, setSeconds] = useState(10);
	const navigate = useRouter();

	useEffect(() => {
		if (seconds > 0) {
			const intervalId = setInterval(() => setSeconds(seconds - 1), 1000);
			return () => clearInterval(intervalId);
		} else {
			navigate.push("/");
		}
	}, [seconds]);

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="w-full max-w-[420px] flex flex-col gap-y-[40px]">
				<p>
					Se ha cambiado correctamente tu contraseña. En{" "}
					<strong>{seconds} </strong>segundos seras redirigido al login o puedes
					hacer{" "}
					<Link href={"/"} className="font-bold underline underline-offset-2">
						click aquí
					</Link>
				</p>
			</div>
		</div>
	);
}
