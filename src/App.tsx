import React from 'react'
import { QueryApp } from './components/QueryApp'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryApp />
    </QueryClientProvider>
  )
}
