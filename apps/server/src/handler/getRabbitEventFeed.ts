import { Request, Response } from 'express';

import {
  FetchRabbitEventFeedEntry,
  FetchRabbitEventFeedResponse,
} from '@pinou/api';
import { RabbitFeedEntry } from '@pinou/event-feed';

import { Factory } from '../factory'

export const getRabbitEventFeedHandler = async (
  req: Request,
  res: Response
) => {
  const rabbit_id = req.params.rabbit_id;

  const entries = await Factory.eventFeed().queries.buildRabbitFeedEntriesQuery(rabbit_id);
  const response = buildResponse(entries);

  res.json(response);
};

const buildResponse = (
  entries: RabbitFeedEntry[]
): FetchRabbitEventFeedResponse => {
  const response_entries: FetchRabbitEventFeedEntry[] = entries
    .map((entry) => ({
      date: entry.date,
      meal: {
        ingredients: entry.meal.ingredients.map((ingredient) => ({
          food_id: ingredient.food_id,
          quantity: ingredient.quantity,
        })),
      },
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    status: 'success',
    data: { entries: response_entries },
  };
};
