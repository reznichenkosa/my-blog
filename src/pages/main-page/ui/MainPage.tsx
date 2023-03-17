import { Counter } from 'entities/counter'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
  const { t } = useTranslation('main')
  return (
    <div>
      <div>{t('mainPage_title')}</div>
      <Counter />
    </div>
  )
}
export default MainPage
