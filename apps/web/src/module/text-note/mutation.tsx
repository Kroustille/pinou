import { useMutation, useQueryClient } from '@tanstack/react-query'
import { client } from '../../client'
import { SaveNoteRequest } from '@pinou/api'

export const useSaveNoteMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (request: SaveNoteRequest): Promise<string> => {
      const response = await client.saveNote(request)
      return response.id
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['note'] })
    }
  })
}