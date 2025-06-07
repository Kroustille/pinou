import { MealEntity } from '@pinou/meal-capture'

export interface RabbitFeedEntry {
  date: Date
  meal: MealEntity
}