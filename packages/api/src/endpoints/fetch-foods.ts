import { GenericResponse } from '../generic.js'

export interface Food {
  id: string
  name: string
}

export type FetchFoodsData = {
  foods: Food[]
}

export type FetchFoodsResponse = GenericResponse<FetchFoodsData>