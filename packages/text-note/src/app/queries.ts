import { NoteRepository } from './repository'

export class TextNoteQueries {
   constructor(private note_repository: NoteRepository) {}

  getNote(date: Date) {
    return this.note_repository.findByDate(date);
  }
}