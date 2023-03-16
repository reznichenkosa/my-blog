import cn from 'classnames'
import styles from './Navbar.module.scss'
import { useCallback, useState, type FC } from 'react'
import { Modal } from 'shared/ui/modal'
import { Button } from 'shared/ui/button'
import { useTranslation } from 'react-i18next'

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
      <Modal isOpen={isOpenAuthModal} onClose={onToggleAuthModal}>
        {t('signIn')}
      </Modal>
    </div>
  )
}
