import { GenericResponse } from '../generic.js'

export interface EventFeedMeal {
  ingredients: {
    food_id: string
    quantity: number
  }[]
}

export type FetchEventFeedData = {
  entries: FetchEventFeedEntry[]
}

export type FetchEventFeedResponse = GenericResponse<FetchEventFeedData>

export interface FetchEventFeedEntry {
  date: string
  rabbits: {
    rabbit_id: string
    meal: EventFeedMeal
  }[]
}
