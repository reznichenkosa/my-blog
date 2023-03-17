import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
  const { t } = useTranslation('main')
  return (
    <div>
      <div>{t('mainPage_title')}</div>
    </div>
  )
}
export default MainPage
