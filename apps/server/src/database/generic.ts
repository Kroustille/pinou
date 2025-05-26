import {
  AnyParamConstructor,
  ReturnModelType,
} from '@typegoose/typegoose/lib/types';
import { mongoose } from '@typegoose/typegoose';

import { BaseEntity } from '@pinou/shared-kernel';
import { Document } from 'mongoose';

export abstract class MongoGenericRepository<
  Model extends AnyParamConstructor<any>,
  Doc,
  Entity extends BaseEntity
> {
  protected model: ReturnModelType<Model>;

  protected constructor(model: ReturnModelType<Model>) {
    this.model = model;
  }

  async exists(query: mongoose.FilterQuery<Entity>): Promise<boolean> {
    const existing = await this.model.exists(query);
    return Boolean(existing);
  }

  async findById(id: string): Promise<Entity | null> {
    const document = await this.model.findById<Doc>(id);
    if (!document) {
      return null;
    }

    return this.buildEntityFromDocument(document);
  }

  async findOne(query: mongoose.FilterQuery<Entity>): Promise<Entity | null> {
    const document = await this.model.findOne<Doc>(query);
    if (!document) {
      return null;
    }

    return this.buildEntityFromDocument(document);
  }

  async create(entity: Omit<Entity, 'id'>): Promise<string> {
    const document: Document = await this.model.create(entity);
    return document.id.toString();
  }

  async update(entity: Entity, options?: { upsert: boolean }): Promise<void> {
    await this.model.updateOne({ _id: entity.id }, entity, options);
  }

  async delete(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  }

  protected abstract buildEntityFromDocument(document: Doc): Entity;
}
