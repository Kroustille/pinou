import { BaseEntity } from '#modules/shared-kernel/domain/entity/base'

export interface GenericRepository<Entity extends BaseEntity> {
  create(entity: Entity | Omit<Entity, 'id'>): Promise<string>
  update(entity: Entity, options?: { upsert: boolean }): Promise<void>
  delete(id: string): Promise<void>
}

export interface Repository {
  connect(): Promise<void>
}
