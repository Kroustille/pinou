import { MealCaptureModule } from '@pinou/meal-capture'
import { EventFeedQueries } from './queries'

export class EventFeedModule {
  public queries: EventFeedQueries

  public constructor(
    mealCapture: MealCaptureModule
  ) { 
    this.queries = new EventFeedQueries(mealCapture)
  }
}