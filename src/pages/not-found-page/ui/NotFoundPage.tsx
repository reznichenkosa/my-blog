import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './NotFoundPage.module.scss'

const NotFoundPage: FC = () => {
  const { t } = useTranslation('translation')
  return <div className={styles.wrapper}>{t('notFoundPage')}</div>
}

export default NotFoundPage
