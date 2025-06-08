import { GenericRepository } from '@pinou/shared-kernel';

import { NoteEntity } from '../domain/note'

export type NoteRepository = GenericRepository<NoteEntity> & {
  findByRabbitAndDate(rabbit_id: string, date: Date): Promise<NoteEntity | null>
};
