/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames'
import { type MouseEvent, type FC, type PropsWithChildren, useEffect } from 'react'
import { Portal } from 'shared/ui/portal'
import styles from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, isOpen, onClose }) => {
  const onContentClick = (e: MouseEvent): void => {
    e.stopPropagation()
  }

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <Portal>
      <div className={cn(styles.wrapper, { [styles.opened]: isOpen })}>
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
