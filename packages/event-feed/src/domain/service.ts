import { MealEntity } from '@pinou/meal-capture'

export interface RabbitFeedEntry {
  date: string
  meal: MealEntity
}

export const buildRabbitFeedEntries = ({ meals }: { meals: MealEntity[] }): RabbitFeedEntry[] => {
  return meals.map(meal => ({
    date: meal.date,
    meal
  }))
}
