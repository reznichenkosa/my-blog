import { lazy } from 'react'

export const MainPageLazy = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1500)
  })
  return await import('./MainPage')
})
