import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/button'
import { Input } from 'shared/ui/input'
import styles from './LoginForm.module.scss'

export const LoginForm: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.wrapper}>
      <Input placeholder={t('login') ?? ''} />
      <Input placeholder={t('password') ?? ''} type='password' />
      <Button>{t('signIn')}</Button>
    </div>
  )
}
