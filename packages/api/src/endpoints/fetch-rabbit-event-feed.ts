import { GenericResponse } from '../generic.js'
import { EventFeedMeal } from './fetch-event-feed.js'

export type FetchRabbitEventFeedData = {
  entries: FetchRabbitEventFeedEntry[]
}

export type FetchRabbitEventFeedResponse = GenericResponse<FetchRabbitEventFeedData>

export interface FetchRabbitEventFeedEntry {
  date: string
  meal: EventFeedMeal
}
