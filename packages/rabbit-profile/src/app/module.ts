import { RabbitProfileQueries } from './queries'


export class RabbitProfileModule {
  public queries: RabbitProfileQueries
  constructor() {
    this.queries = new RabbitProfileQueries()
  }
}