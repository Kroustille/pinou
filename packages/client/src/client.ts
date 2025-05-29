import axios from 'axios'
import { GenericResponse, CaptureMealRequest, FetchFoodsData, FetchRabbitEventFeedData, FetchRabbitsData } from '@pinou/api'

export class PinouClient {
  private base_url: string

  constructor(base_url: string) {
    this.base_url = base_url
  }

  async fetchRabbits(): Promise<FetchRabbitsData> {
    return this.get<FetchRabbitsData>('rabbit')
  }

  async fetchRabbitEventFeed(rabbit_id: string): Promise<FetchRabbitEventFeedData> {
    return this.get<FetchRabbitEventFeedData>(`event-feed/${rabbit_id}`)
  }

  async fetchFoods(): Promise<FetchFoodsData> {
    return this.get<FetchFoodsData>('food')
  }

  async captureMeal(request: CaptureMealRequest): Promise<void> {
    await this.put('meal', request)
  }

  private async get<T extends Record<string, unknown>>(path: string): Promise<T> {
    const result = await axios.get<GenericResponse<T>>(`${this.base_url}/${path}`)
    if (result.data.status === 'error') {
      throw new Error('error occured')
    }

    return result.data.data
  }

  private async put<T extends Record<string, unknown>>(path: string, body: unknown): Promise<T> {
    const result = await axios.put<GenericResponse<T>>(`${this.base_url}/${path}`, body)
    if (result.data.status === 'error') {
      throw new Error('error occured')
    }

    return result.data.data
  }
}