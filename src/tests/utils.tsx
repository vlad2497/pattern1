import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as _ReduxProvider } from 'react-redux'
import { store } from '@/store'

export const BrowserRouterProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  return <BrowserRouter>{children}</BrowserRouter>
}

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <_ReduxProvider store={store}>{children}</_ReduxProvider>
}

export const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <_ReduxProvider store={store}>{children}</_ReduxProvider>
    </BrowserRouter>
  )
}
