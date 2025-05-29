import { useMutation, useQueryClient } from '@tanstack/react-query'
import { client } from '../../client'
import { CaptureMealRequest } from '@pinou/api'

export const useCaptureMealMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (request: CaptureMealRequest) => {
      return client.captureMeal(request)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meal'] })
    }
  })
}