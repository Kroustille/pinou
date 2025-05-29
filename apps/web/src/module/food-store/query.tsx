import { useQuery } from '@tanstack/react-query'
import { client } from '../../client'
import { Food } from '@pinou/api'

export const useFoodsQuery = () => {
  return useQuery({
    queryKey: ['food'],
    queryFn: async (): Promise<Food[]> => {
      const { foods } = await client.fetchFoods()
      return foods
    }
  })
}