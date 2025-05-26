import { MealCaptureQueries } from './queries'
import { MealRepository } from './repository'

export class MealCaptureModule {
  public queries: MealCaptureQueries
  
  public constructor(mealRepository: MealRepository) {
    this.queries = new MealCaptureQueries(mealRepository)
  }
}