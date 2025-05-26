interface ErrorResponse {
  status: 'error'
}

interface SuccessResponse<T> {
  status: 'success',
  data: T
}

export type GenericResponse<T extends Record<string, unknown>> = SuccessResponse<T> | ErrorResponse
