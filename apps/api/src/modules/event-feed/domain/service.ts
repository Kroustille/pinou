import { MealEntity } from '#modules/meal-capture/domain/entity/meal'

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
