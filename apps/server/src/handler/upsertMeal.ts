import { Request, Response } from 'express';
import { Factory } from '../factory'

interface UpsertMealHandlerPayload {
  date: string;
  meals: {
    rabbit_id: string;
    ingredients: {
      food_id: string;
      quantity: number;
    }[];
  }[];
}

export const upsertMealHandler = async (req: Request, res: Response) => {
  const payload: UpsertMealHandlerPayload = req.body;

  const commands = payload.meals.map((meal) => {
    return Factory.mealCapture().commands.upsertMeal({
      date: payload.date,
      rabbit_id: meal.rabbit_id,
      ingredients: meal.ingredients,
    });
  });

  const meal_ids = await Promise.all(commands);

  res.json({ status: 'ok', meal_ids });
};
