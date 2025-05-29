import { Request, Response } from 'express';
import { Factory } from '../factory'
import { FetchRabbitsResponse } from '@pinou/api'

export const listRabbitsHandler = (req: Request, res: Response) => {
  const rabbits = Factory.rabbitProfile().queries.listRabbits();

  const response: FetchRabbitsResponse = {
    status: 'success',
    data: {
      rabbits
    }
  }

  res.json(response);
};
