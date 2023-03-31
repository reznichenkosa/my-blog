import { type FC } from 'react'
import styles from './Text.module.scss'
import cn from 'classnames'

interface TextProps {
  title?: string
  text?: string
  variant?: 'default' | 'error'
}

export const Text: FC<TextProps> = ({ title, text, variant = 'default' }) => {
  return (
    <div className={styles.wrapper}>
      {title && <h6 className={cn(styles.title, styles[variant])}>{title}</h6>}
      {text && <p className={cn(styles.text, styles[variant])}>{text}</p>}
    </div>
  )
}
