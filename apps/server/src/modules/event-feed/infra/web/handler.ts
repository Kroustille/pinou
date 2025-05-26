import { Request, Response } from 'express';

import { buildRabbitFeedEntriesQuery } from '#modules/event-feed/app/query/build-rabbit-feed-entries';
import {
  GetRabbitEventFeedEntry,
  GetRabbitEventFeedResponse,
} from '@pinou/api';
import { RabbitFeedEntry } from '@pinou/event-feed';

export const getRabbitEventFeedHandler = async (
  req: Request,
  res: Response
) => {
  const rabbit_id = req.params.rabbit_id;

  const entries = await buildRabbitFeedEntriesQuery(rabbit_id);
  const response = buildResponse(entries);

  res.json(response);
};

const buildResponse = (
  entries: RabbitFeedEntry[]
): GetRabbitEventFeedResponse => {
  const response_entries: GetRabbitEventFeedEntry[] = entries
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
