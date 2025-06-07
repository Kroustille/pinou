import { NoteEntity, NoteRepository } from '@pinou/text-note';
import {
  NoteDocument,
  NoteModel,
} from './document';
import { MongoGenericRepository } from '../generic';

export class MongoNoteRepository
  extends MongoGenericRepository<typeof NoteModel, NoteDocument, NoteEntity>
  implements NoteRepository
{
  constructor() {
    super(NoteModel);
  }

  protected buildEntityFromDocument(document: NoteDocument): NoteEntity {
    return NoteEntity.create({
      id: document.id,
      date: document.date,
      content: document.content
    });
  }
}
