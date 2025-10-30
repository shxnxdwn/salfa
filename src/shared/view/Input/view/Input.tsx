import styles from './Input.module.css';
import { type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  hasError?: boolean;
};

export const Input = (props: InputProps) => {
  const { className, hasError, ...otherProps } = props;

  const inputClasses = [styles.input, hasError && styles.error, className]
    .filter(Boolean)
    .join(' ');

  return <input className={inputClasses} {...otherProps} />;
};
