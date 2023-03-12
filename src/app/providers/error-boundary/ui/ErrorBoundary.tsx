import { Component, Suspense, type ErrorInfo, type ReactElement } from 'react'
import { Loader } from 'shared/ui/loader'
import { AppError } from 'shared/ui/app-error'

interface ErrorBoundaryProps {
  children: ReactElement<any, any>
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo)
  }

  render(): JSX.Element {
    if (this.state.hasError) {
      return (
        <Suspense fallback={<Loader />}>
          <AppError />
        </Suspense>
      )
    }

    return this.props.children
  }
}
