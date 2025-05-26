import { RabbitEntity } from '../domain/entity/rabbit'

export class RabbitProfileQueries {
  listRabbits(): RabbitEntity[] {
    return [
      RabbitEntity.create({ id: '67f96f69935d7013f6621322', name: 'Ikea' }),
      RabbitEntity.create({ id: '67f96f6b66262a7f89709887', name: 'Oreo' }),
      RabbitEntity.create({ id: '67f96f6f920417486ebf9444', name: 'Pucca' }),
    ];
  }
}