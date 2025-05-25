import { MealEntity } from '#modules/meal-capture/domain/entity/meal'
import { GenericRepository } from '#modules/shared-kernel/infra/database/repository'

export type MealRepository = GenericRepository<MealEntity> & {
  getMeal(query: { rabbit_id: string, date: string }): Promise<MealEntity | null>
  listRabbitMeals(query: { rabbit_id: string }): Promise<MealEntity[]>
}
