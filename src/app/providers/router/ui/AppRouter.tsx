import { type FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from '../router-config'

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
