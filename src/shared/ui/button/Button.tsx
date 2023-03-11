import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type FC,
  type PropsWithChildren,
} from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

type ButtonVariant = 'ghost' | 'outline' | 'primary' | 'danger' | 'success'

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'ghost',
  ...otherProps
}) => {
  return (
    <button {...otherProps} className={cn(styles.button, styles[variant])}>
      {children}
    </button>
  )
}
