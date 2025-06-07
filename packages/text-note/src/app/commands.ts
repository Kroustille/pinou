import { NoteEntity } from '../domain/note'
import { NoteRepository } from './repository'

export class TextNoteCommands {
  constructor(private note_repository: NoteRepository) {}

  async saveNote(payload: { id?: string, date: Date, content: string }): Promise<string> {
    const entity = NoteEntity.create({ ...payload, id: payload.id ?? 'fake-id'})
    
    if (payload.id) {
      await this.note_repository.update(entity)
      return payload.id
    } 

    return this.note_repository.create(entity)
  }
}