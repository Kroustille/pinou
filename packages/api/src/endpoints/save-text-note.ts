import { GenericResponse } from '../generic'

export interface SaveNoteRequest {
  id?: string
  date: string
  content: string
}

export type SaveNoteResponseData = {
  id: string
}

export type SaveNoteResponse = GenericResponse<SaveNoteResponseData>