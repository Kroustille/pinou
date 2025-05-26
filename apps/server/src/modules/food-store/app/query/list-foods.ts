import { FoodEntity } from '#modules/food-store/domain/entity/food';

export const listFoodsQuery = (): FoodEntity[] => {
  return [
    FoodEntity.create({
      id: '67f96f49fbdd362833586669',
      name: 'Feuille de chêne',
    }),
    FoodEntity.create({ id: '67f96f53615c12b151656f43', name: 'Persil frisé' }),
    FoodEntity.create({ id: '680c18607e3c3be675063dbc', name: 'Persil plat' }),
    FoodEntity.create({
      id: '67f96f59a1fb910386b1a991',
      name: 'Céleri branche',
    }),
    FoodEntity.create({ id: '680c18656578e44c8315f0d7', name: 'Céleri rave' }),
    FoodEntity.create({ id: '680c18684a49981ee2e70e01', name: 'Batavia' }),
    FoodEntity.create({ id: '680c186c2ee8e60c0d51c0c4', name: 'Mâche' }),
    FoodEntity.create({
      id: '680c186f469a801d8ef378b1',
      name: 'Salade frisée',
    }),
    FoodEntity.create({ id: '680c1872f12e3f042f66e73e', name: 'Fenouil' }),
  ];
};
