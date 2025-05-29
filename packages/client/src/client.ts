import axios from 'axios'
import { FetchFoodsData, FetchRabbitEventFeedData } from '@pinou/api'
import { GenericResponse } from '@pinou/api'

export class PinouClient {
  private base_url: string

  constructor() {
    this.base_url = 'http://localhost:3000'
  }

  async fetchRabbitEventFeed(rabbit_id: string): Promise<FetchRabbitEventFeedData> {
    return this.get<FetchRabbitEventFeedData>(`event-feed/${rabbit_id}`)
  }

  async fetchFoods(): Promise<FetchFoodsData> {
    return this.get<FetchFoodsData>('food')
  }

  private async get<T extends Record<string, unknown>>(path: string): Promise<T> {
    const result = await axios.get<GenericResponse<T>>(`${this.base_url}/${path}`)
    if (result.data.status === 'error') {
      throw new Error('error occured')
    }

    return result.data.data
  }
}