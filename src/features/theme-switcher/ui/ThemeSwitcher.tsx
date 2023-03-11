import { type Theme, useTheme } from 'shared/contexts/theme-context'
import styles from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { type FC, type SVGAttributes } from 'react'
import { Button } from 'shared/ui/button'

const ThemeIcons: Record<Theme, FC<SVGAttributes<SVGElement>>> = {
  dark: DarkIcon,
  light: LightIcon,
}

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme()
  const CurrentThemeIcon = ThemeIcons[theme]
  return (
    <Button className={styles.button} onClick={toggleTheme}>
      {<CurrentThemeIcon className={styles.icon} />}
    </Button>
  )
}
