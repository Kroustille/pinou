import { Request, Response } from 'express';
import { Factory } from '../factory'

export const listRabbitsHandler = (req: Request, res: Response) => {
  const rabbits = Factory.rabbitProfile().queries.listRabbits();

  res.json({ status: 'ok', rabbits });
};
