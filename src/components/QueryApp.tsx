import React from 'react'
import { Navbar, Page } from './Navbar'
import { People } from './People'
import { Planets } from './Planets'

export const QueryApp = () => {
  const [page, setPage] = React.useState<Page | undefined>(undefined)
  return (
    <div className="app">
      <h1>Star Wars Info</h1>
      <Navbar onPageChange={setPage} selected={page!} />
      <div className="content">
        {page && page === 'planets' ? (
          <Planets />
        ) : page === 'people' ? (
          <People />
        ) : undefined}
      </div>
    </div>
  )
}
