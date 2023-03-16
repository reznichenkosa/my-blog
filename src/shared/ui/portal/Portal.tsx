import { type PropsWithChildren, type FC } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  container?: HTMLElement
}

export const Portal: FC<PropsWithChildren<PortalProps>> = ({
  children,
  container = document.body,
}) => {
  return createPortal(children, container)
}
