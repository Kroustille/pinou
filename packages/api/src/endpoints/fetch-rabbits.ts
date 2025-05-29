import { GenericResponse } from '../generic'

export interface Rabbit {
  id: string
  name: string
}

export type FetchRabbitsData = {
  rabbits: Rabbit[]
}

export type FetchRabbitsResponse = GenericResponse<FetchRabbitsData>
