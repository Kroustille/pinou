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
