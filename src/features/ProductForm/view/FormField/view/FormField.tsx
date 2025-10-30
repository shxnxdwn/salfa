import styles from './FormField.module.css';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { Input } from '@shared/view/Input';
import { Textarea } from '@shared/view/Textarea';

type FormFieldProps = {
  label: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
  as?: 'input' | 'textarea';
  type?: string;
};

export const FormField = (props: FormFieldProps) => {
  const { label, error, registration, as = 'input', type = 'text' } = props;
  const id = registration.name;
  const Component = as === 'textarea' ? Textarea : Input;

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}</label>
      <Component id={id} type={type} hasError={!!error} {...registration} />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};
