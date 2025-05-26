import { useQuery } from '@tanstack/react-query'
import { fetchRabbits } from './http'
import { Rabbit } from '../domain/rabbit'

export const useRabbitsQuery = () => {
  return useQuery({
    queryKey: ['rabbit'],
    queryFn: async (): Promise<Rabbit[]> => {
      return fetchRabbits()
    }
  })
}