import { FoodStoreQueries } from './queries.js'

export class FoodStoreModule {
  public queries: FoodStoreQueries

  constructor() {
    this.queries = new FoodStoreQueries()
  }
}