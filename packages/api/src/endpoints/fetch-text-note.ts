import { GenericResponse } from '../generic'

export interface FetchNoteRequest {
  date: string
  rabbit_id: string
}

export type FetchNoteResponseData = {
  id: string
  date: string
  content: string
  rabbit_id: string
}

export type FetchNoteResponse = GenericResponse<FetchNoteResponseData>