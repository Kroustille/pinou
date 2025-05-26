import { MealEntity } from '../domain'
import { MealRepository } from './repository'

export interface UpsertMealCommandPayload {
  date: string;
  rabbit_id: string;
  ingredients: {
    food_id: string;
    quantity: number;
  }[];
}

export class MealCaptureCommands {
  constructor(private meal_repository: MealRepository) {}

  async upsertMeal({
  date,
  rabbit_id,
  ingredients,
}: UpsertMealCommandPayload): Promise<string> {
    const saved_meal = await this.meal_repository.getMeal({ date, rabbit_id });
    if (saved_meal) {
      const updated_meal = MealEntity.create({
        ...saved_meal,
        ingredients,
      });

      await this.meal_repository.update(updated_meal);

      return updated_meal.id;
    }

    const id = await this.meal_repository.create({ date, rabbit_id, ingredients });
    return id;
  }
}