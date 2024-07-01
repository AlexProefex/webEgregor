import styles from "./Button.module.css";

interface Props {
	bgColor?: string;
	textColor?: string;
	text: string;
	type: "button" | "submit" | "reset" | undefined;
}

export function Button({
	bgColor = "bg-primary",
	textColor = "text-white",
	text,
	type = "button",
}: Props) {
	return (
		<button type={type} className={`${styles.button} ${bgColor} ${textColor}`}>
			{text}
		</button>
	);
}
