import React, { useMemo } from 'react'
import { EventFeedMeal } from '@pinou/api'
import { EventFeedMealIngredientItem } from './item'

interface Props {
  meal: EventFeedMeal
}

export const EventFeedMealIngredientList: React.FC<Props> = ({ meal }) => {
  const list = useMemo(() => {
    return <ul>
      {
        meal.ingredients.map(ingredient => <EventFeedMealIngredientItem ingredient={ingredient}/>)
      }
    </ul>
  }, [meal.ingredients])
  
  return list
}