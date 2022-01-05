import React from 'react'
import type { Planet } from './types'

interface PlanetViewProps {
  planet: Planet
}

export const PlanetView = ({ planet }: PlanetViewProps) => (
  <div className="card">
    <h3>{planet.name}</h3>
    <p>{planet.population}</p>
    <p>{planet.terrain}</p>
  </div>
)
