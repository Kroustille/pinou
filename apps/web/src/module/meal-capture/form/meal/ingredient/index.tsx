import { CaptureMealRequestMealIngredient } from '@pinou/api'
import { useFoodsQuery } from '../../../../food-store/query'
import { InputNumber } from '../../../../ui/input/number'

interface Props {
  rabbit_id: string
  ingredient: CaptureMealRequestMealIngredient
  onChange: (ingredient: CaptureMealRequestMealIngredient) => void
}

export const MealCaptureFormMealIngredient: React.FC<Props> = ({ rabbit_id, ingredient, onChange }: Props) => {
  const forKey = `${rabbit_id}-${ingredient.food_id}`
  const { data: foods } = useFoodsQuery()
  const food = foods?.find(f => f.id === ingredient.food_id)
  if (!food) {
    return <>Food missing</>
  }

  return <div>
    <label htmlFor={forKey}>{food.name}</label>
    <InputNumber
      id={forKey} 
      onChange={quantity => onChange({ ...ingredient, quantity })} 
      value={ingredient.quantity}
    />
  </div>
}