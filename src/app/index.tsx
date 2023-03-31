import { type FC, Suspense, useEffect } from 'react'
import { Navbar } from 'widgets/navbar'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/sidebar'
import { Loader } from 'shared/ui/loader'
import './styles/index.scss'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/user'

export const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className='app'>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <div className='page-wrapper'>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}
