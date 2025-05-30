import React from 'react'
import { MealCaptureCaptureForm } from './component/form'
import { useCaptureMealMutation } from './mutation'
import { useRabbitsQuery } from '../rabbit-profile/query'
import { useFoodsQuery } from '../food-store/query'

export const MealCapturePage: React.FC = () => {
  const { data: rabbits } = useRabbitsQuery()
  const { data: foods } = useFoodsQuery()
  const mutation = useCaptureMealMutation()

  if (!rabbits) {
    return <h1>No rabbits found</h1>
  }

  if (!foods) {
    return <h1>No foods found</h1>
  }

  return <>
    <h1>Saisie des repas</h1>
    <MealCaptureCaptureForm 
      rabbits={rabbits}
      foods={foods}
      onSubmit={request => mutation.mutate(request)}/>
  </>
}