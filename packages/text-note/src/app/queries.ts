import { NoteRepository } from './repository'

export class TextNoteQueries {
   constructor(private note_repository: NoteRepository) {}

  getNote({ rabbit_id, date }: { rabbit_id: string, date: Date }) {
    return this.note_repository.findByRabbitAndDate(rabbit_id, date);
  }
}