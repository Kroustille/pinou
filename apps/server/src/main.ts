import { MongoRepository } from './database/client';
import { launchServer } from './server';

(async () => {
  const repository = new MongoRepository();

  await repository.connect();

  launchServer();
})();
