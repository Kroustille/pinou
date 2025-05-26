import { log } from '#infra/logger';
import { mongoose } from '@typegoose/typegoose';

export class MongoRepository {
  async connect(): Promise<void> {
    log.info('connecting to database...');
    await mongoose.connect('mongodb://localhost:27017/', { dbName: 'pinou' });
    log.info('connected to database');
  }
}
