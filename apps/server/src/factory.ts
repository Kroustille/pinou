import { MealCaptureModule } from '@pinou/meal-capture'
import { MongoMealRepository } from './database/meal/repository'
import { EventFeedModule } from '@pinou/event-feed'
import { RabbitProfileModule } from '@pinou/rabbit-profile'
import { FoodStoreModule } from '@pinou/food-store'

export class Factory {
  private static food_store_module: FoodStoreModule
  private static event_feed_module: EventFeedModule
  private static meal_capture_module: MealCaptureModule
  private static rabbit_profile_module: RabbitProfileModule

  static mealRepository () {
    return new MongoMealRepository()
  }

  static foodStore() {
    if (!this.food_store_module) {
      this.food_store_module = new FoodStoreModule()
    }

    return this.food_store_module
  }

  static mealCapture() {
    if (!this.meal_capture_module) {
      this.meal_capture_module = new MealCaptureModule(this.mealRepository())
    }

    return this.meal_capture_module
  }

  static eventFeed() {
    if (!this.event_feed_module) {
      this.event_feed_module = new EventFeedModule(this.mealCapture())
    }

    return this.event_feed_module
  }

  static rabbitProfile() {
    if (!this.rabbit_profile_module) {
      this.rabbit_profile_module = new RabbitProfileModule()
    }
    
    return this.rabbit_profile_module
  }
}