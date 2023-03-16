import { type FC, Suspense } from 'react'
import { Navbar } from 'widgets/navbar'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/sidebar'
import { Loader } from 'shared/ui/loader'
import './styles/index.scss'

export const App: FC = () => {
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
