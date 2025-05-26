import axios from 'axios'

import { GetRabbitEventFeedData, GetRabbitEventFeedResponse } from '@pinou/api'

export const fetchRabbitEventFeed = async (rabbit_id?: string): Promise<GetRabbitEventFeedData> => {
  if (!rabbit_id) {
    return { entries: [] }
  }

  const result = await axios.get<GetRabbitEventFeedResponse>(`http://localhost:3001/event-feed/${rabbit_id}`)
  if (result.data.status === 'error') {
    throw new Error('error occured')
  }

  return result.data.data
}
