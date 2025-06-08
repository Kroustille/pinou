import { GenericResponse } from '../generic'

export interface FetchNoteRequest {
  date: string
}

export type FetchNoteResponseData = {
  id: string
  date: string
  content: string
}

export type FetchNoteResponse = GenericResponse<FetchNoteResponseData>