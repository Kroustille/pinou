import { Router } from 'express'

import { listRabbitsHandler } from '#modules/rabbit-profile/infra/web/handler'
import { listFoodsHandler } from '#modules/food-store/infra/web/handler'
import { upsertMealHandler } from '#modules/meal-capture/infra/web/handler'
import { getRabbitEventFeedHandler } from '#modules/event-feed/infra/web/handler'

export const router = (): Router => {
  const r = Router()

  // food store routes
  r.get('/food', listFoodsHandler)

  // meal capture routes
  r.put('/meal', upsertMealHandler)

  // rabbit profile routes
  r.get('/rabbit', listRabbitsHandler)

  // event feed routes
  r.get('/event-feed/:rabbit_id', getRabbitEventFeedHandler)

  return r
}
