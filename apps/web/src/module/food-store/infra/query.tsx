import { useQuery } from '@tanstack/react-query'
import { fetchFoods } from './http'
import { Food } from '../domain/food'

export const useFoodsQuery = () => {
  return useQuery({
    queryKey: ['food'],
    queryFn: async (): Promise<Food[]> => {
      return fetchFoods()
    }
  })
}