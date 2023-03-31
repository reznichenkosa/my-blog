import { type FC } from 'react'
import { Modal } from 'shared/ui/modal'
import { LoginForm } from '../login-form/LoginForm'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  container?: 'body' | 'root'
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, container = 'body' }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} container={container}>
      <LoginForm />
    </Modal>
  )
}
