import { type FC } from 'react'
import { Modal } from 'shared/ui/modal'
import { LoginForm } from '../login-form/LoginForm'
import styles from './LoginModal.module.scss'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  )
}
