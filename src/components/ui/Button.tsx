import type { ReactNode, ButtonHTMLAttributes } from 'react';

const variants = {
  primary: 'bg-brand text-dark hover:translate-x-[2px] hover:translate-y-[2px]',
  secondary: 'bg-dark text-white hover:bg-zinc-800 hover:translate-x-[2px] hover:translate-y-[2px]',
  outline: 'bg-transparent text-dark hover:bg-brand',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: keyof typeof variants;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'px-7 py-4 rounded-2xl font-space text-xl font-medium transition-all duration-200 active:translate-x-0 active:translate-y-0 active:shadow-none border-2 border-dark cursor-pointer inline-flex items-center justify-center';

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
