import React from "react";

function Button({ text, background, textColor, className }) {
	return (
		<button
			className={`${background || "bg-pri-I"} ${
				textColor || "text-pri-II"
			} rounded-3xl py-4 px-8 flex justify-center align-center text-base ${className}`}
		>
			{text || "Click me"}
		</button>
	);
}

export default Button;
