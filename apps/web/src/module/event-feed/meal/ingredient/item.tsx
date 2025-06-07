import React, { useMemo } from 'react'
import { useFoodsQuery } from '../../../food-store/query'
import { EventFeedMeal } from '@pinou/api'

interface Props {
  ingredient: EventFeedMeal['ingredients'][number]
}

export const EventFeedMealIngredientItem: React.FC<Props> = ({ ingredient }) => {
  const { data: foods } = useFoodsQuery()
  const food = useMemo(() => {
    return foods?.find(f => f.id === ingredient.food_id)
  }, [ingredient, foods])
  
  return <li key={ingredient.food_id}>{food?.name ?? 'Not found'} {ingredient.quantity}g</li>
}