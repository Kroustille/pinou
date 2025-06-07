import { Router } from 'express';

import { listRabbitsHandler } from './handler/listRabbits';
import { listFoodsHandler } from './handler/listFoods';
import { upsertMealHandler } from './handler/upsertMeal';
import { getRabbitEventFeedHandler } from './handler/getRabbitEventFeed'
import { getEventFeedHandler } from './handler/getEventFeed'

export const router = (): Router => {
  const r = Router();

  // food store routes
  r.get('/food', listFoodsHandler);

  // meal capture routes
  r.put('/meal', upsertMealHandler);

  // rabbit profile routes
  r.get('/rabbit', listRabbitsHandler);

  // event feed routes
  r.get('/event-feed', getEventFeedHandler)
  r.get('/event-feed/:rabbit_id', getRabbitEventFeedHandler);

  return r;
};
