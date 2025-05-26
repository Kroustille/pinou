import React from 'react'
import { MealCaptureCaptureForm } from './component/form'
import { useCaptureMealMutation } from './infra/mutation'
import { useRabbitsQuery } from '../rabbit-profile/infra/query'
import { useFoodsQuery } from '../food-store/infra/query'

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