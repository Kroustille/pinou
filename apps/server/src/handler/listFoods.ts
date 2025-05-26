import { Request, Response } from 'express';
import { Factory } from '../factory'
import { FoodEntity } from '@pinou/food-store'

export const listFoodsHandler = (req: Request, res: Response) => {
  const foods: FoodEntity[] = Factory.foodStore().queries.listFoods();

  res.json({ status: 'ok', foods });
};
