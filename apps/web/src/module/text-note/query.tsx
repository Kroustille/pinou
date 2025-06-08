import { useQuery } from '@tanstack/react-query'
import { client } from '../../client'

export const useNoteQuery = (date?: string) => {
  return useQuery({
    queryKey: ['note', date],
    queryFn: async () => {
      if (!date) {
        return null
      }

      try {
        const note = await client.fetchNote({ date })
        return note
      } catch(err) {
        console.warn(err)
        return null
      }
    }
  })
}