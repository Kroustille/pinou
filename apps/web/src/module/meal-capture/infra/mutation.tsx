import { useMutation, useQueryClient } from '@tanstack/react-query'
import { captureMeal, CaptureMealRequest } from './http'

export const useCaptureMealMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (request: CaptureMealRequest) => {
      return captureMeal(request)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['meal'] })
    }
  })
}