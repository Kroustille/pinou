import { GenericResponse } from '../generic.js'

export type FetchRabbitEventFeedData = {
  entries: FetchRabbitEventFeedEntry[]
}

export type FetchRabbitEventFeedResponse = GenericResponse<FetchRabbitEventFeedData>

export interface FetchRabbitEventFeedEntry {
  date: string
  meal: {
    ingredients: {
      food_id: string
      quantity: number
    }[]
  }
}
