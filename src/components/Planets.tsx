import React from 'react'
import { QueryFunctionContext, useQuery } from 'react-query'
import { z } from 'zod'
import { PlanetView } from './Planet'
import { Planet } from './types'

const fetchPlanets = async ({
  queryKey,
}: QueryFunctionContext<[string, number]>) => {
  const res = await fetch(
    `https://swapi.dev/api/${queryKey[0]}?page=${queryKey[1]}`,
  )
  return res.json()
}

export const Planets = () => {
  const [page, setPage] = React.useState(1)
  const { data, status } = useQuery(['planets', page], fetchPlanets)

  if (status === 'error') {
    throw new Error('something went wrong')
  }

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  const planets = z.array(Planet).parse(data.results)

  return (
    <>
      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>
      <div>
        {planets.map(({ name, population, terrain }) => {
          const planet: Planet = {
            name,
            population,
            terrain,
          }
          return <PlanetView key={name} planet={planet} />
        })}
      </div>
    </>
  )
}
