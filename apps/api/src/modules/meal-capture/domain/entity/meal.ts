import { Ingredient } from '#modules/meal-capture/domain/value/food'
import { BaseEntity, BaseEntityProps } from '#modules/shared-kernel/domain/entity/base'

type CreateMealProps = BaseEntityProps & {
  date: string
  rabbit_id: string
  ingredients: {
    food_id: string
    quantity: number
  }[]
}

export class MealEntity extends BaseEntity {
  readonly date: string
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
