import { GenericRepository } from '@pinou/shared-kernel';

import { NoteEntity } from '../domain/note'

export type NoteRepository = GenericRepository<NoteEntity> & {
  findByDate(date: Date): Promise<NoteEntity | null>
};
