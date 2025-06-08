import { TextNoteCommands } from './commands'
import { TextNoteQueries } from './queries'
import { NoteRepository } from './repository'

export class TextNoteModule {
  public commands: TextNoteCommands
  public queries: TextNoteQueries
  
  public constructor(note_repository: NoteRepository) {
    this.commands = new TextNoteCommands(note_repository)
    this.queries = new TextNoteQueries(note_repository)
  }
}