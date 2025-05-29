import { useQuery } from '@tanstack/react-query'
import { client } from '../../client'

export const useRabbitsQuery = () => {
  return useQuery({
    queryKey: ['rabbit'],
    queryFn: async () => {
      const { rabbits } = await client.fetchRabbits()
      return rabbits
    }
  })
}