import { type FC, useState } from 'react'
import { Button } from 'shared/ui/button'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { ThemeSwitcher } from 'features/theme-switcher'
import BarIcon from 'shared/assets/icons/bar.svg'
import BarIconReverse from 'shared/assets/icons/bar-reverse.svg'
import { LangSwitcher } from 'features/lang-switcher'
import { useTranslation } from 'react-i18next'
import { AppLink } from 'shared/ui/app-link'
import { RoutePaths } from 'app/providers/router/router-config'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

export const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { t } = useTranslation('translation')
  const onToggle = (): void => {
    setIsCollapsed((prevValue) => !prevValue)
  }

  return (
    <div data-testid='sidebar' className={cn(styles.wrapper, { [styles.collapsed]: isCollapsed })}>
      <div className={cn(styles['collapse-btn'], { [styles['collapse-btn-center']]: isCollapsed })}>
        <Button data-testid='sidebar-toggle' onClick={onToggle}>
          {isCollapsed ? (
            <BarIcon className={styles.icon} />
          ) : (
            <BarIconReverse className={styles.icon} />
          )}
        </Button>
      </div>
      <div className={styles.content}>
        <div className={cn(styles.links, { [styles['links-center']]: isCollapsed })}>
          <AppLink to={RoutePaths.main}>
            <div className={styles['link-wrapper']}>
              <HomeIcon className={styles.icon} />
              {!isCollapsed && t('mainLink')}
            </div>
          </AppLink>
          <AppLink to={RoutePaths.about}>
            <div className={styles['link-wrapper']}>
              <AboutIcon className={styles.icon} />
              {!isCollapsed && t('aboutLink')}
            </div>
          </AppLink>
        </div>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
