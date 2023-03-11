import { type FC, useState } from 'react'
import { Button } from 'shared/ui/button'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { ThemeSwitcher } from 'features/theme-switcher'
import BarIcon from 'shared/assets/icons/bar.svg'
import { LangSwitcher } from 'features/lang-switcher'

export const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const onToggle = (): void => {
    setIsCollapsed((prevValue) => !prevValue)
  }

  return (
    <div className={cn(styles.wrapper, { [styles.collapsed]: isCollapsed })}>
      <div className={styles.collapseBtn}>
        <Button onClick={onToggle}>
          <BarIcon className={styles.icon} />
        </Button>
      </div>
      <div className={styles.content}></div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
