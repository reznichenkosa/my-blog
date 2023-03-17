import { ThemeProvider } from 'app/providers/theme-provider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app'
import 'shared/config/i18n/i18n'
import React from 'react'
import { ErrorBoundary } from 'app/providers/error-boundary'
import { StoreProvider } from 'app/providers/store-provider'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
)
