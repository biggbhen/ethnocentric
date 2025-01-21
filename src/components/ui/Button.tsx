import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'secondary';
	className?: string;
	disabled?: boolean;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	type = 'button',
	variant = 'primary',
	className = '',
	disabled = false,
	icon,
	iconPosition = 'left',
}) => {
	const baseStyles = `px-4 py-3 font-medium rounded-tl-[24px] rounded-br-[24px] focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`;
	const variantStyles = {
		primary:
			'bg-[#E86025] text-[#FAFAFA] hover:bg-[#d75422] focus:ring-[#E86025]',
		secondary:
			'bg-[#FAFAFA] text-[#FFA929] border border-[#FFA929] hover:bg-[#FFF2E5] focus:ring-[#FFA929]',
	};

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
			{icon && iconPosition === 'left' && <span>{icon}</span>}
			{children}
			{icon && iconPosition === 'right' && <span>{icon}</span>}
		</button>
	);
};

export default Button;
