import { useQuery } from '@tanstack/react-query'
import { FetchRabbitEventFeedData } from '@pinou/api'
import { client } from '../../infra'

export const useGetRabbitEventFeedQuery = (rabbit_id?: string) => {
  return useQuery({
    queryKey: ['meal', rabbit_id],
    queryFn: async (): Promise<FetchRabbitEventFeedData> => {
      if (!rabbit_id) {
        return { entries: [] }
      }
      
      return client.fetchRabbitEventFeed(rabbit_id)
    }
  })
}
