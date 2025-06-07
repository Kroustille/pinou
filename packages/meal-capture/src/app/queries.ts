import { MealRepository } from './repository'

export class MealCaptureQueries {
   constructor(private mealRepository: MealRepository) {}

  listMeals(query: { rabbit_id?: string } = {}) {
    return this.mealRepository.listMeals(query);
  }
}