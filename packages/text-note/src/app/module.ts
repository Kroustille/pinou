import { TextNoteCommands } from './commands'
import { NoteRepository } from './repository'

export class TextNoteModule {
  public commands: TextNoteCommands
  
  public constructor(note_repository: NoteRepository) {
    this.commands = new TextNoteCommands(note_repository)
  }
}