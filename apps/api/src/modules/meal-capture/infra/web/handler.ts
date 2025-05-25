import { Request, Response } from 'express'

import { upsertMealCommand } from '#modules/meal-capture/app/command/upsert-meal'

interface UpsertMealHandlerPayload {
  date: string
  meals: {
    rabbit_id: string
    ingredients: {
      food_id: string
      quantity: number
    }[]
  }[]
}

export const upsertMealHandler = async (req: Request, res: Response) => {
  const payload: UpsertMealHandlerPayload = req.body

  const commands = payload.meals.map(meal => {
    return upsertMealCommand({
      date: payload.date,
      rabbit_id: meal.rabbit_id,
      ingredients: meal.ingredients
    })
  })

  const meal_ids = await Promise.all(commands)

  res.json({ status: 'ok', meal_ids })
}
