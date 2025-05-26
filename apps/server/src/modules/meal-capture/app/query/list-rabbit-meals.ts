import { MealEntity } from '@pinou/meal-capture';
import { MealCaptureFactory } from '#modules/meal-capture/infra/factory';

export const listRabbitMeals = (rabbit_id: string): Promise<MealEntity[]> => {
  const repository = MealCaptureFactory.getMealRepository();
  return repository.listRabbitMeals({ rabbit_id });
};
