import styles from './Button.module.css';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'danger' | 'outline' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { children, variant = 'primary', className, ...otherProps } = props;

  const buttonClasses = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClasses} {...otherProps}>
      {children}
    </button>
  );
};
