import { useQuery } from '@tanstack/react-query'
import { fetchRabbitEventFeed } from './http'
import { GetRabbitEventFeedData } from '@pinou/api'

export const useGetRabbitEventFeedQuery = (rabbit_id?: string) => {
  return useQuery({
    queryKey: ['meal', rabbit_id],
    queryFn: async (): Promise<GetRabbitEventFeedData> => {
      return fetchRabbitEventFeed(rabbit_id)
    }
  })
}
