import cn from 'classnames'
import styles from './Navbar.module.scss'
import { useCallback, useState, type FC } from 'react'
import { Button } from 'shared/ui/button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/auth-by-username'

export const Navbar: FC = () => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false)
  const { t } = useTranslation('translation')

  const onToggleAuthModal = useCallback(() => {
    setIsOpenAuthModal((prevValue) => !prevValue)
  }, [])
  return (
    <div className={cn(styles.wrapper)}>
      <Button variant='outline' onClick={onToggleAuthModal}>
        {t('signIn')}
      </Button>
      <LoginModal isOpen={isOpenAuthModal} onClose={onToggleAuthModal} />
    </div>
  )
}
