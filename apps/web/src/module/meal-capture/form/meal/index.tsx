import React from 'react'
import { MealCaptureFormMealIngredient } from './ingredient'
import { CaptureMealRequestMealIngredient, CaptureMealRequestMeal } from '@pinou/api'
import { useRabbitsQuery } from '../../../rabbit-profile/query'

interface Props {
  meal: CaptureMealRequestMeal
  onChange: (meal: CaptureMealRequestMeal) => void
}

export const MealCaptureFormMeal: React.FC<Props> = ({ meal, onChange }: Props) => {
  const { data: rabbits } = useRabbitsQuery()

  const handleChange = (new_ingredient: CaptureMealRequestMealIngredient, index: number) => {
    onChange({
      ...meal,
      ingredients: meal.ingredients.map((ingredient, i) => i === index ? new_ingredient : ingredient)
    })
  }

  const rabbit = rabbits?.find(r => r.id === meal.rabbit_id)
  if (!rabbit) {
    return <>Rabbit missing</>
  }
  

  return <>
    <h2>{rabbit.name}</h2>
    <fieldset>
      {
        meal.ingredients.map((ingredient, index) => <MealCaptureFormMealIngredient 
          key={ingredient.food_id} 
          rabbit_id={rabbit.id}
          ingredient={ingredient}
          onChange={(ingredient) => handleChange(ingredient, index)}
        />)
      }
    </fieldset>
  </>
}