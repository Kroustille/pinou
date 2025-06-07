import { BaseEntity, BaseEntityProps } from '@pinou/shared-kernel'

type CreateNoteProps = BaseEntityProps & {
  date: Date
  content: string
}

export class NoteEntity extends BaseEntity {
  readonly date: Date
  readonly content: string

  private constructor({ id, date, content }: CreateNoteProps) {
    super({ id })

    this.date = date
    this.content = content
  }

  static create(props: CreateNoteProps) {
    return new NoteEntity(props)
  }
}
