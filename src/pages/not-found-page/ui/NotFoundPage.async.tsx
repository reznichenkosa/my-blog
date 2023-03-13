import { lazy } from 'react'

export const NotFoundPageLazy = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500)
  })
  return await import('./NotFoundPage')
})
