import { z } from 'zod'

export const Planet = z.object({
  name: z.string(),
  terrain: z.string(),
  population: z.string(),
})

export type Planet = z.infer<typeof Planet>

export const Person = z.object({
  name: z.string(),
  gender: z.string(),
  birth_year: z.string(),
})

export type Person = z.infer<typeof Person>
