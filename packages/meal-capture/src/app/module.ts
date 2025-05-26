import { MealCaptureCommands } from './commands'
import { MealCaptureQueries } from './queries'
import { MealRepository } from './repository'

export class MealCaptureModule {
  public queries: MealCaptureQueries
  public commands: MealCaptureCommands
  
  public constructor(mealRepository: MealRepository) {
    this.queries = new MealCaptureQueries(mealRepository)
    this.commands = new MealCaptureCommands(mealRepository)
  }
}