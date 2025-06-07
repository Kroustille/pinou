import { FormEvent, useEffect, useState } from 'react'
import { MealCaptureFormMeal } from './meal'
import { Rabbit, CaptureMealRequest, CaptureMealRequestMeal } from '@pinou/api'
import { Food } from '@pinou/api'

interface Props {
  rabbits: Rabbit[]
  foods: Food[]
  onSubmit: (request: CaptureMealRequest) => void
}

export const MealCaptureCaptureForm: React.FC<Props> = ({ rabbits, foods, onSubmit }: Props) => {
  const [request, setRequest] = useState<Partial<CaptureMealRequest>>({})
  const isRequestComplete = (request: Partial<CaptureMealRequest>): request is CaptureMealRequest => {
    return Boolean(request.date) && Boolean(request.meals) && Boolean(request.meals?.length) 
  }

  useEffect(() => {
    const date = new Date().toISOString().slice(0, 10);
    const meals: CaptureMealRequestMeal[] = rabbits.map(rabbit => ({
      rabbit_id: rabbit.id,
      ingredients: foods.map(food => ({
        food_id: food.id,
        quantity: 0
      }))
    }))

    setRequest({
      date,
      meals
    })
  }, [foods, rabbits])

  const handleChangeMeal = (new_meal: CaptureMealRequest['meals'][number], index: number) => {
    const new_meals = (request.meals ?? []).map((meal, i) => index === i ? new_meal : meal)
    setRequest({
      ...request,
      meals: new_meals
    })
  }

  const handleChangeDate = (date: string) => {
    setRequest({
      ...request,
      date
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const is_request_complete = isRequestComplete(request)
    if (is_request_complete) {
      onSubmit(request)
    }
  }

  return <form onSubmit={handleSubmit}>
    <label htmlFor="meal-date" >Date du repas</label>
    <input 
      type="date" 
      placeholder="Date" 
      id="meal-date" 
      value={request.date} 
      onChange={(event) => handleChangeDate(event?.target.value)}
    /> 
    {
      request.meals?.map(
        (meal, index) => <MealCaptureFormMeal 
          key={meal.rabbit_id} 
          meal={meal}
          onChange={new_meal => handleChangeMeal(new_meal, index)}
        />
      )
    }
    <input type="submit" value="Enregistrer" />
  </form>
}