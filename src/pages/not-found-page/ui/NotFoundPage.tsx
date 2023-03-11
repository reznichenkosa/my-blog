import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage: FC = () => {
  const { t } = useTranslation('translation')
  return <div className={styles.wrapper}>{t('notFoundPage')}</div>
}
