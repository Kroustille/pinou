import { MealEntity } from '@pinou/meal-capture'

export interface RabbitFeedEntry {
  date: string
  meal: MealEntity
}