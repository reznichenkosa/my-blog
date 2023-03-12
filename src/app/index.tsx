import { type FC, Suspense } from 'react'
import { useTheme } from 'shared/contexts/theme-context'
import { Navbar } from 'widgets/navbar'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/sidebar'
import { Loader } from 'shared/ui/loader'
import cn from 'classnames'
import './styles/index.scss'

export const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', theme)}>
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
