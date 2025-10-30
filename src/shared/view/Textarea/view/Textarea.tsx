import styles from './Textarea.module.css';
import { type TextareaHTMLAttributes } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
  hasError?: boolean;
};

export const Textarea = (props: TextareaProps) => {
  const { className, hasError, ...otherProps } = props;

  const textareaClasses = [styles.textarea, hasError && styles.error, className]
    .filter(Boolean)
    .join(' ');

  return <textarea className={textareaClasses} {...otherProps} />;
};
