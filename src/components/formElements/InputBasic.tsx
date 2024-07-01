import { HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.css";

interface Props {
    label: string;
	placeholder: string;
	type: HTMLInputTypeAttribute | undefined;
	name: string;
	value: string;
	change: React.ChangeEventHandler;
	blur: React.FocusEventHandler;
	error: boolean | undefined;
	helpertext: any;
}

export function InputBasic({
	type,
	label,
	placeholder,
	name,
	value,
	change,
	blur,
	error,
	helpertext,
}: Props) {
	return (
		<div className={styles.group}>
			{label && <label className={styles.label}>{label}</label>}
			<div className={styles.inputGroup}>
				<input
					type={type}
					name={name}
					id={name}
					value={value}
					onChange={change}
					onBlur={blur}
					placeholder={placeholder}
					className={`${styles.input} ${error && styles.error}`}
				/>
				{error && <p className={styles.helpertext}>{helpertext}</p>}
			</div>
		</div>
	);
}
