import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500)
  })
  return await import('./AboutPage')
})
