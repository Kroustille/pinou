import { MealEntity } from '@pinou/meal-capture'

export interface FeedEntry {
  date: Date
  rabbits: {
    rabbit_id: string
    meal: MealEntity
  }[]
}

export interface RabbitFeedEntry {
  date: Date
  meal: MealEntity
}