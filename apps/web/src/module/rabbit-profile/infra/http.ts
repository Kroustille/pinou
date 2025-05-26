import axios from 'axios'
import { Rabbit } from '../domain/rabbit'

interface Response {
  status: string
  rabbits: Rabbit[]
}

export const fetchRabbits = async () => {
  const result = await axios.get<Response>('http://localhost:3001/rabbit')
  return result.data.rabbits
}