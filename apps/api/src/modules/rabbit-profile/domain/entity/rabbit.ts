import { BaseEntity, BaseEntityProps } from '#modules/shared-kernel/domain/entity/base'

type CreateRabbitProps = BaseEntityProps & {
  name: string
}

export class RabbitEntity extends BaseEntity {
  readonly name: string

  private constructor({ id, name }: CreateRabbitProps) {
    super({ id })

    this.name = name
  }

  static create(props: CreateRabbitProps) {
    if (!props.id) {
      throw new Error('missing-id')
    }

    if (!props.name) {
      throw new Error('missing-name')
    }

    return new RabbitEntity(props)
  }
}
