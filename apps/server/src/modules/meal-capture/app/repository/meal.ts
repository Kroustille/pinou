import { MealEntity } from '@pinou/meal-capture';
import { GenericRepository } from '@pinou/shared-kernel';

export type MealRepository = GenericRepository<MealEntity> & {
  getMeal(query: {
    rabbit_id: string;
    date: string;
  }): Promise<MealEntity | null>;
  listRabbitMeals(query: { rabbit_id: string }): Promise<MealEntity[]>;
};
