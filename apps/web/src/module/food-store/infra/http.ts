import axios from 'axios'
import { Food } from '../domain/food'

interface Response {
  foods: Food[]
}

export const fetchFoods = async () => {
  const result = await axios.get<Response>('http://localhost:3001/food')
  return result.data.foods
}