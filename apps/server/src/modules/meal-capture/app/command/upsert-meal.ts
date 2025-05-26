import { MealEntity } from '@pinou/meal-capture';
import { Factory } from '../../../../factory'

export interface UpsertMealCommandPayload {
  date: string;
  rabbit_id: string;
  ingredients: {
    food_id: string;
    quantity: number;
  }[];
}

export const upsertMealCommand = async ({
  date,
  rabbit_id,
  ingredients,
}: UpsertMealCommandPayload): Promise<string> => {
  const meal_repository = Factory.getMealRepository();

  const saved_meal = await meal_repository.getMeal({ date, rabbit_id });
  if (saved_meal) {
    const updated_meal = MealEntity.create({
      ...saved_meal,
      ingredients,
    });

    await meal_repository.update(updated_meal);

    return updated_meal.id;
  }

  const id = await meal_repository.create({ date, rabbit_id, ingredients });
  return id;
};
