import { NoteRepository } from './repository'

export class TextNoteCommands {
  constructor(private note_repository: NoteRepository) {}

  async saveNote(payload: { rabbit_id: string, date: Date, content: string }): Promise<string> {
    const existing_note = await this.note_repository.findByRabbitAndDate(payload.rabbit_id, payload.date)
    if (existing_note) {
      await this.note_repository.update({
        ...existing_note,
        ...payload
      })

      return existing_note.id
    }

    return this.note_repository.create(payload)
  }
}