import { buildRabbitFeedEntries, RabbitFeedEntry } from '#modules/event-feed/domain/service'
import { listRabbitMeals } from '#modules/meal-capture/app/query/list-rabbit-meals'

export const buildRabbitFeedEntriesQuery = async (rabbit_id: string): Promise<RabbitFeedEntry[]> => {
  const meals = await listRabbitMeals(rabbit_id)
  return buildRabbitFeedEntries({ meals })
}
