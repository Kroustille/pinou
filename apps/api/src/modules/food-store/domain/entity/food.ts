import { BaseEntity, BaseEntityProps } from '#modules/shared-kernel/domain/entity/base'

type CreateFoodProps = BaseEntityProps & {
  name: string
}

export class FoodEntity extends BaseEntity {
  readonly name: string

  private constructor({ id, name }: CreateFoodProps) {
    super({ id })

    this.name = name
  }

  static create(props: CreateFoodProps) {
    if (!props.id) {
      throw new Error('missing-id')
    }

    if (!props.name) {
      throw new Error('missing-name')
    }

    return new FoodEntity(props)
  }
}
