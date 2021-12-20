import React, { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton> = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className={`rounded-xl text-center text-white font-bold shadow-md text-lg py-3 px-6 btn-grad m-auto ${props.className}`}
			style={{ minWidth: 180 }}
		>
			{children}
		</button>
	)
}

export default Button
