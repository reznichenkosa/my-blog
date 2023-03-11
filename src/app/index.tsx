import { useTheme } from 'shared/contexts/theme-context'
import { Navbar } from 'widgets/navbar'
import { AppRouter } from './providers/router'
import cn from 'classnames'
import './styles/index.scss'
import { Sidebar } from 'widgets/sidebar'
import { type FC, Suspense } from 'react'
import { Loader } from 'shared/ui/loader'

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
