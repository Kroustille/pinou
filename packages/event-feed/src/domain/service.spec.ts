import { MealEntity } from '@pinou/meal-capture'
import { buildFeedEntries } from './service'

describe('EventFeedService', () => {
  describe('buildFeedEntries', () => {
    const first_rabbit_id = 'first_rabbit_id'
    const second_rabbit_id = 'second_rabbit_id'

    it('should build feed entries', () => {
      const first_date = new Date('01/01/2025')
      const second_date = new Date('01/02/2025')
      const first_rabbit_first_meal = MealEntity.create({
        id: 'first_rabbit_first_meal',
        rabbit_id: first_rabbit_id,
        date: first_date,
        ingredients: []
      })

      const first_rabbit_second_meal = MealEntity.create({
        id: 'first_rabbit_second_meal',
        rabbit_id: first_rabbit_id,
        date: second_date,
        ingredients: []
      })


      const second_rabbit_first_meal = MealEntity.create({
        id: 'second_rabbit_first_meal',
        rabbit_id: second_rabbit_id,
        date: first_date,
        ingredients: []
      })

      const second_rabbit_second_meal = MealEntity.create({
        id: 'second_rabbit_second_meal',
        rabbit_id: second_rabbit_id,
        date: second_date,
        ingredients: []
      })

      const meals = [
        first_rabbit_first_meal,
        first_rabbit_second_meal,
        second_rabbit_first_meal,
        second_rabbit_second_meal
      ]

      const event_feed = buildFeedEntries({ meals })

      expect(event_feed.length).toBe(2)

      expect(event_feed[0].date).toBe(first_date)
      expect(event_feed[0].rabbits.length).toBe(2)
      expect(event_feed[0].rabbits[0].rabbit_id).toBe(first_rabbit_id)
      expect(event_feed[0].rabbits[0].meal).toBe(first_rabbit_first_meal)
      expect(event_feed[0].rabbits[1].rabbit_id).toBe(second_rabbit_id)
      expect(event_feed[0].rabbits[1].meal).toBe(second_rabbit_first_meal)

      expect(event_feed[1].date).toBe(second_date)
      expect(event_feed[1].rabbits.length).toBe(2)
      expect(event_feed[1].rabbits[0].rabbit_id).toBe(first_rabbit_id)
      expect(event_feed[1].rabbits[0].meal).toBe(first_rabbit_second_meal)
      expect(event_feed[1].rabbits[1].rabbit_id).toBe(second_rabbit_id)
      expect(event_feed[1].rabbits[1].meal).toBe(second_rabbit_second_meal)
    })
  })
})