import { Button } from 'shared/ui/button'
import LangIcon from 'shared/assets/icons/lang.svg'
import styles from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

export const LangSwitcher: FC = () => {
  const { i18n } = useTranslation()
  const toggleLang = async (): Promise<void> => {
    const currentLang = i18n.language
    i18n.changeLanguage(currentLang === 'en' ? 'ru' : 'en')
  }
  const currentLang = i18n.language

  return (
    <Button onClick={toggleLang} variant='success'>
      <div className={styles.language}>
        <LangIcon className={styles.icon} />
        <span>{currentLang}</span>
      </div>
    </Button>
  )
}
