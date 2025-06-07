import { MealCaptureModule } from '@pinou/meal-capture'
import { buildFeedEntries, buildRabbitFeedEntries } from '../domain/service';
import { FeedEntry, RabbitFeedEntry } from '../domain/value/entry'

export class EventFeedQueries {
  constructor(private mealCapture: MealCaptureModule) {}
  
  async buildRabbitFeedEntriesQuery(rabbit_id: string): Promise<RabbitFeedEntry[]> {
    const meals = await this.mealCapture.queries.listMeals({ rabbit_id });
    return buildRabbitFeedEntries({ meals });
  }

  async buildFeedEntriesQuery(): Promise<FeedEntry[]> {
    const meals = await this.mealCapture.queries.listMeals();
    return buildFeedEntries({ meals })
  }
}