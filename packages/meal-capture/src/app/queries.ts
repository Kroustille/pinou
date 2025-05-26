import { MealRepository } from './repository'

export class MealCaptureQueries {
   constructor(private mealRepository: MealRepository) {}

  listRabbitMeals(rabbit_id: string) {
    return this.mealRepository.listRabbitMeals({ rabbit_id });
  }
}