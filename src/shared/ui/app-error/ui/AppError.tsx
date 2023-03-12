import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/button'
import styles from './AppError.module.scss'

export const AppError: FC = () => {
  const { t } = useTranslation('translation')

  const reloadPage = (): void => {
    window.location.reload()
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.error}>{t('somethingWentWrong')}</p>
      <Button variant='primary' onClick={reloadPage}>
        {t('reloadPage')}
      </Button>
    </div>
  )
}
