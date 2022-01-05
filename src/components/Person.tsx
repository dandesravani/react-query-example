import React from 'react'
import { Person } from './types'

interface PersonViewProps {
  person: Person
}

export const PersonView = ({ person }: PersonViewProps) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>{person.gender}</p>
      <p>{person.birth_year}</p>
    </div>
  )
}
