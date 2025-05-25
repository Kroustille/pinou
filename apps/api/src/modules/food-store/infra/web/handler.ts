import { Request, Response } from 'express'

import { listFoodsQuery } from '#modules/food-store/app/query/list-foods'

export const listFoodsHandler = (req: Request, res: Response) => {
  const foods = listFoodsQuery()

  res.json({ status: 'ok', foods })
}
