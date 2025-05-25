import { MealRepository } from '#modules/meal-capture/app/repository/meal'
import { MealEntity } from '#modules/meal-capture/domain/entity/meal'
import { MealDocument, MealModel } from '#modules/meal-capture/infra/database/meal/document'
import { MongoGenericRepository } from '#infra/database/generic'

export class MongoMealRepository
  extends MongoGenericRepository<typeof MealModel, MealDocument, MealEntity>
  implements MealRepository {

  constructor() {
    super(MealModel)
  }

  getMeal(query: { rabbit_id: string; date: string }): Promise<MealEntity | null> {
    return this.findOne({ rabbit_id: query.rabbit_id, date: query.date })
  }

  async listRabbitMeals(query: { rabbit_id: string }): Promise<MealEntity[]> {
    const meal_documents = await this.model.find({ rabbit_id: query.rabbit_id })
    return meal_documents.map(meal_document => this.buildEntityFromDocument(meal_document))
  }

  protected buildEntityFromDocument(document: MealDocument): MealEntity {
    return MealEntity.create({
      id: document.id,
      date: document.date,
      rabbit_id: document.rabbit_id,
      ingredients: document.ingredients.map(ingredient => ({
        food_id: ingredient.food_id,
        quantity: ingredient.quantity
      }))
    })
  }
}
