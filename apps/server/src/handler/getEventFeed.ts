import { Request, Response } from 'express';

import {
  FetchEventFeedEntry,
  FetchEventFeedResponse,
} from '@pinou/api';
import { FeedEntry } from '@pinou/event-feed';

import { Factory } from '../factory'

export const getEventFeedHandler = async (
  req: Request,
  res: Response
) => {
  const entries = await Factory.eventFeed().queries.buildFeedEntriesQuery();
  const response = buildResponse(entries);

  res.json(response);
};

const buildResponse = (
  entries: FeedEntry[]
): FetchEventFeedResponse => {
  const response_entries: FetchEventFeedEntry[] = entries
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map((entry) => ({
      date: entry.date.toJSON(),
      rabbits: entry.rabbits.map(rabbit => ({
        rabbit_id: rabbit.rabbit_id,
        meal: {
          ingredients: rabbit.meal.ingredients.map((ingredient) => ({
            food_id: ingredient.food_id,
            quantity: ingredient.quantity,
          })),
        },
      }))
    }))

  return {
    status: 'success',
    data: { entries: response_entries },
  };
};
