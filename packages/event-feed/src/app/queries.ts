import { MealCaptureModule } from '@pinou/meal-capture'
import { buildRabbitFeedEntries } from '../domain/service';
import { RabbitFeedEntry } from '../domain/value/entry'

export class EventFeedQueries {
  constructor(private mealCapture: MealCaptureModule) {}
  
  async buildRabbitFeedEntriesQuery(rabbit_id: string): Promise<RabbitFeedEntry[]> {
    const meals = await this.mealCapture.queries.listRabbitMeals(rabbit_id);
    return buildRabbitFeedEntries({ meals });
  }
}