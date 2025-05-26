import { useQuery } from '@tanstack/react-query'
import { GetRabbitEventFeedData } from '@pinou/api'
import { client } from '../../infra'

export const useGetRabbitEventFeedQuery = (rabbit_id?: string) => {
  return useQuery({
    queryKey: ['meal', rabbit_id],
    queryFn: async (): Promise<GetRabbitEventFeedData> => {
      return client.fetchRabbitEventFeed(rabbit_id)
    }
  })
}
