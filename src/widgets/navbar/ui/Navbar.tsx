import cn from 'classnames'
import styles from './Navbar.module.scss'
import { useCallback, useState, type FC } from 'react'
import { Button } from 'shared/ui/button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/auth-by-username'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/user'

export const Navbar: FC = () => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const { t } = useTranslation('translation')

  const onToggleAuthModal = useCallback(() => {
    setIsOpenAuthModal((prevValue) => !prevValue)
  }, [])

  const logoutHandler = useCallback(() => {
    setIsOpenAuthModal(false)
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={cn(styles.wrapper)}>
        <Button variant='outline' onClick={logoutHandler}>
          {t('signOut')}
        </Button>
      </div>
    )
  }

  return (
    <div className={cn(styles.wrapper)}>
      <Button variant='outline' onClick={onToggleAuthModal}>
        {t('signIn')}
      </Button>
      <LoginModal isOpen={isOpenAuthModal} onClose={onToggleAuthModal} />
    </div>
  )
}
