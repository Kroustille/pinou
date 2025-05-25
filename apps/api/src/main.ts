import { MongoRepository } from '#infra/database/client'
import { launchServer } from '#infra/web/server'

(async () => {
  const repository = new MongoRepository()

  await repository.connect()

  launchServer()
})()

