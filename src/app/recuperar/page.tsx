"use client";

import { useState } from "react";
import Image from "next/image";

import { FinalStep, InsertCode, ResetPassword, SendCode } from "@/components/forms";

export default function RecuperarContrasenaPage() {
	const [recoveryState, setRecoveryState] = useState(1);

	return (
		<main className="min-h-screen grid grid-cols-2">
			<figure className="relative h-full w-full">
				<Image
					src={"/assets/login.png"}
					alt={"Imagen de fondo del login"}
					fill
				/>
			</figure>
			{recoveryState == 1 && <SendCode setRecoveryState={setRecoveryState} />}
			{recoveryState == 2 && <InsertCode setRecoveryState={setRecoveryState} />}
			{recoveryState == 3 && <ResetPassword setRecoveryState={setRecoveryState} />}
			{recoveryState == 4 && <FinalStep />}
		</main>
	);
}
