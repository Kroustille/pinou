import { MealCaptureCommands } from './commands'
import { MealCaptureQueries } from './queries'
import { MealRepository } from './repository'

export class MealCaptureModule {
  public queries: MealCaptureQueries
  public commands: MealCaptureCommands
  
  public constructor(meal_repository: MealRepository) {
    this.queries = new MealCaptureQueries(meal_repository)
    this.commands = new MealCaptureCommands(meal_repository)
  }
}