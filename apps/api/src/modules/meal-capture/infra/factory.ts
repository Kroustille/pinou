import { MealRepository } from '#modules/meal-capture/app/repository/meal'
import { MongoMealRepository } from '#modules/meal-capture/infra/database/meal/repository'

export class MealCaptureFactory {
  public static getMealRepository(): MealRepository {
    return new MongoMealRepository()
  }
}
