import cn from 'classnames'
import styles from './Navbar.module.scss'
import { AppLink } from 'shared/ui/app-link'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Navbar: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.links}>
        <AppLink to='/'>{t('mainLink')}</AppLink>
        <AppLink to='/about'>{t('aboutLink')}</AppLink>
      </div>
    </div>
  )
}
