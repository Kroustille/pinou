import { MealEntity } from '@pinou/meal-capture';
import {
  MealDocument,
  MealModel,
} from './document';
import { MongoGenericRepository } from '../generic';
import { MealRepository } from '@pinou/meal-capture'

export class MongoMealRepository
  extends MongoGenericRepository<typeof MealModel, MealDocument, MealEntity>
  implements MealRepository
{
  constructor() {
    super(MealModel);
  }
  
  getMeal(query: {
    rabbit_id: string
    date: Date
  }): Promise<MealEntity | null> {
    return this.findOne({ rabbit_id: query.rabbit_id, date: query.date });
  }

  async listMeals(query: { rabbit_id?: string }): Promise<MealEntity[]> {
    return this.find(query.rabbit_id ? { rabbit_id: query.rabbit_id }: {});
  }

  protected buildEntityFromDocument(document: MealDocument): MealEntity {
    return MealEntity.create({
      id: document.id,
      date: document.date,
      rabbit_id: document.rabbit_id,
      ingredients: document.ingredients.map((ingredient) => ({
        food_id: ingredient.food_id,
        quantity: ingredient.quantity,
      })),
    });
  }
}
