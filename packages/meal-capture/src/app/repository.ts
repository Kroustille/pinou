import { GenericRepository } from '@pinou/shared-kernel';

import { MealEntity } from '../domain/entity/meal';

export type MealRepository = GenericRepository<MealEntity> & {
  getMeal(query: {
    rabbit_id: string;
    date: string;
  }): Promise<MealEntity | null>;
  listRabbitMeals(query: { rabbit_id: string }): Promise<MealEntity[]>;
};
