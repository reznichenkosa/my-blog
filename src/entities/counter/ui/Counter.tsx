import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value'
import { counterActions } from '../model/slice/counter-slice'

export const Counter: FC = () => {
  const counterValue = useSelector(getCounterValue)
  const dispatch = useDispatch()
  const { t } = useTranslation('translation')
  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }
  return (
    <div>
      <h1>{t('counter')}</h1>
      <div data-testid='value-title'>{counterValue}</div>
      <button data-testid='increment-btn' onClick={increment}>
        {t('increment')}
      </button>
      <button data-testid='decrement-btn' onClick={decrement}>
        {t('decrement')}
      </button>
    </div>
  )
}
