import {
  type DetailedHTMLProps,
  type InputHTMLAttributes,
  type FC,
  memo,
  type ChangeEvent,
} from 'react'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'onChange'
>

interface InputProps extends HTMLInputProps {
  onChange?: (val: string) => void
}

export const Input: FC<InputProps> = memo(({ type = 'text', onChange, ...otherProps }) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
  }
  return <input {...otherProps} type={type} onChange={changeHandler} className={styles.input} />
})
