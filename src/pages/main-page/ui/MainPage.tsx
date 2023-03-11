import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
  const { t } = useTranslation('main')
  return <div>{t('mainPage_title')}</div>
}
export default MainPage
