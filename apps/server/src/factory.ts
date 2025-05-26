import { MealCaptureModule } from '@pinou/meal-capture'
import { MongoMealRepository } from './infra/database/meal/repository'
import { EventFeedModule } from '@pinou/event-feed'

export class Factory {
  private static eventFeedModule: EventFeedModule
  private static mealCaptureModule: MealCaptureModule

  static getMealRepository () {
    return new MongoMealRepository()
  }

  static getMealCaptureModule() {
    if (!this.mealCaptureModule) {
      this.mealCaptureModule = new MealCaptureModule(this.getMealRepository())
    }

    return this.mealCaptureModule
  }

  static getEventFeedModule() {
    if (!this.eventFeedModule) {
      this.eventFeedModule = new EventFeedModule(this.getMealCaptureModule())
    }

    return this.eventFeedModule
  }
}