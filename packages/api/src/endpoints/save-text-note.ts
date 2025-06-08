import { GenericResponse } from '../generic'

export interface SaveNoteRequest {
  date: string
  rabbit_id: string
  content: string
}

export type SaveNoteResponseData = {
  id: string
}

export type SaveNoteResponse = GenericResponse<SaveNoteResponseData>