import { type FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Loader } from 'shared/ui/loader'
import { routeConfig } from '../router-config'

export const AppRouter: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
