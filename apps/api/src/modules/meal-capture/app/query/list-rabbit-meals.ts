import { MealEntity } from '#modules/meal-capture/domain/entity/meal'
import { MealCaptureFactory } from '#modules/meal-capture/infra/factory'

export const listRabbitMeals = (rabbit_id: string): Promise<MealEntity[]> => {
  const repository = MealCaptureFactory.getMealRepository()
  return repository.listRabbitMeals({ rabbit_id })
}
