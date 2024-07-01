import { useState } from "react";
import styles from "./Input.module.css";

interface Props {
	label: string;
	placeholder: string;
	name: string;
	value: string;
	change: React.ChangeEventHandler;
	blur: React.FocusEventHandler;
	error: boolean | undefined;
	helpertext: any;
}

export function InputPassword({
	label,
	placeholder,
	name,
	value,
	change,
	blur,
	error,
	helpertext,
}: Props) {
	const [showPassword, setShowPassword] = useState(false);

	function onShowPassword() {
		setShowPassword(!showPassword);
	}

	return (
		<div className={styles.group}>
			{label && <label className={styles.label}>{label}</label>}
			<div className={styles.inputGroup}>
				<div className="relative">
					<input
						type={`${showPassword ? "text" : "password"}`}
						name={name}
						id={name}
						value={value}
						onChange={change}
						onBlur={blur}
						placeholder={placeholder}
						className={`${styles.input} ${error && styles.error}`}
					/>
					<button
						type="button"
						onClick={() => onShowPassword()}
						className={styles.buttonEye}
					>
						<svg
							className="flex-shrink-0 size-3.5 text-gray-400 dark:text-neutral-600"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path
								className={`${showPassword ? "hidden" : ""}`}
								d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
							></path>
							<path
								className={`${showPassword ? "hidden" : ""}`}
								d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
							></path>
							<path
								className={`${showPassword ? "hidden" : ""}`}
								d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
							></path>
							<line
								className={`${showPassword ? "hidden" : ""}`}
								x1="2"
								x2="22"
								y1="2"
								y2="22"
							></line>
							<path
								className={`${showPassword ? "block" : "hidden"}`}
								d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
							></path>
							<circle
								className={`${showPassword ? "block" : "hidden"}`}
								cx="12"
								cy="12"
								r="3"
							></circle>
						</svg>
					</button>
				</div>
				{error && <p className={styles.helpertext}>{helpertext}</p>}
			</div>
		</div>
	);
}
