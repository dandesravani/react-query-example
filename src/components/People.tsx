import React from 'react'
import { QueryFunctionContext, useQuery } from 'react-query'
import { z } from 'zod'
import { PersonView } from './Person'
import { Person } from './types'

const fetchPeople = async ({
  queryKey,
}: QueryFunctionContext<[string, number]>) => {
  const res = await fetch(
    `https://swapi.dev/api/${queryKey[0]}/?page=${queryKey[1]}`,
  )
  return res.json()
}

export const People = () => {
  const [page, setPage] = React.useState(1)
  const { data, status } = useQuery(['people', page], fetchPeople)

  if (status === 'error') {
    return <p>Error</p>
  }

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  const people = z.array(Person).parse(data.results)

  return (
    <>
      <button
        disabled={data.previous === null}
        onClick={() => setPage(page => page - 1)}
      >
        Previous
      </button>
      <span>{page}</span>
      <button
        disabled={data.next === null}
        onClick={() => setPage(page => page + 1)}
      >
        Next
      </button>
      <div>
        {people.map(({ name, gender, birth_year }) => {
          const personNew: Person = {
            name,
            gender,
            birth_year,
          }
          return <PersonView key={name} person={personNew} />
        })}
      </div>
    </>
  )
}
