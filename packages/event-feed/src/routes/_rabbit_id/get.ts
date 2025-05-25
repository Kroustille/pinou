import { GenericResponse } from '../../generic.js'

export type GetRabbitEventFeedData = {
  entries: GetRabbitEventFeedEntry[]
}

export type GetRabbitEventFeedResponse = GenericResponse<GetRabbitEventFeedData>

export interface GetRabbitEventFeedEntry {
  date: string
  meal: {
    ingredients: {
      food_id: string
      quantity: number
    }[]
  }
}
