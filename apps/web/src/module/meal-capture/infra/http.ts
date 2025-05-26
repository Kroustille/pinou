import axios from 'axios'

export interface CaptureMealRequest {
  date: string
  meals: CaptureMealRequestMeal[]
}

export interface CaptureMealRequestMeal {
  rabbit_id: string
  ingredients: CaptureMealRequestMealIngredient[]
}

export interface CaptureMealRequestMealIngredient {
  food_id: string
  quantity: number
}

export const captureMeal = (request: CaptureMealRequest) => {
  return axios.put('http://localhost:3001/meal', request)
}