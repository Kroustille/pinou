import { Request, Response } from 'express';

import { listRabbitsQuery } from '#modules/rabbit-profile/app/query/list-rabbits';

export const listRabbitsHandler = (req: Request, res: Response) => {
  const rabbits = listRabbitsQuery();

  res.json({ status: 'ok', rabbits });
};
