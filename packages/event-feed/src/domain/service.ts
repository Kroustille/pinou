import { MealEntity } from '@pinou/meal-capture'

import { RabbitFeedEntry } from './value/entry'

export const buildRabbitFeedEntries = ({ meals }: { meals: MealEntity[] }): RabbitFeedEntry[] => {
  return meals.map(meal => ({
    date: meal.date,
    meal
  }))
}
