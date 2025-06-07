import { BaseEntity, BaseEntityProps } from '@pinou/shared-kernel'
import { Ingredient } from '../value/food'

type CreateMealProps = BaseEntityProps & {
  date: Date
  rabbit_id: string
  ingredients: {
    food_id: string
    quantity: number
  }[]
}

export class MealEntity extends BaseEntity {
  readonly date: Date
  readonly rabbit_id: string
  readonly ingredients: Ingredient[]

  private constructor({ id, date, rabbit_id, ingredients }: CreateMealProps) {
    super({ id })

    this.date = date
    this.rabbit_id = rabbit_id
    this.ingredients = ingredients
  }

  static create(props: CreateMealProps) {
    return new MealEntity(props)
  }
}
