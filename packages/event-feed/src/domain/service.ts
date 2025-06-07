import { MealEntity } from '@pinou/meal-capture'

import { FeedEntry, RabbitFeedEntry } from './value/entry'

export const buildFeedEntries = ({ meals }: { meals: MealEntity[] }): FeedEntry[] => {
  const feed_map = new Map<string, FeedEntry>()
  meals.forEach(meal => {
    const key = meal.date.toJSON()
    if (feed_map.has(key)) {
      feed_map.get(key)?.rabbits.push({rabbit_id: meal.rabbit_id, meal})
    } else {
      const feed_entry: FeedEntry = {
        date: meal.date,
        rabbits: [
          {
            rabbit_id: meal.rabbit_id,
            meal
          }
        ]
      }

      feed_map.set(key, feed_entry)
    }
  })

  return Array.from(feed_map.values())
}

export const buildRabbitFeedEntries = ({ meals }: { meals: MealEntity[] }): RabbitFeedEntry[] => {
  return meals.map(meal => ({
    date: meal.date,
    meal
  }))
}
