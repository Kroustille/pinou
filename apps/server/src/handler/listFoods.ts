import { Request, Response } from 'express';
import { Factory } from '../factory'
import { FoodEntity } from '@pinou/food-store'
import { FetchFoodsResponse } from '@pinou/api'

export const listFoodsHandler = (req: Request, res: Response) => {
  const foods: FoodEntity[] = Factory.foodStore().queries.listFoods();

  const response: FetchFoodsResponse = { status: 'success', data: { foods } }

  res.json(response);
};
