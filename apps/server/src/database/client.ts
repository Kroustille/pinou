import { log } from '../logger';
import { mongoose } from '@typegoose/typegoose';

export class MongoRepository {
  async connect(): Promise<void> {
    const host = process.env.DATABASE_HOST ?? 'localhost'
    log.info('connecting to database...');
    await mongoose.connect(`mongodb://${host}:27017/`, { dbName: 'pinou' });
    log.info('connected to database');
  }
}
