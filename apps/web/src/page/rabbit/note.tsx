import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRabbitsQuery } from '../../module/rabbit-profile/query'
import { TextNoteForm } from '../../module/text-note/form'
import { useSaveNoteMutation } from '../../module/text-note/mutation'

export const PageRabbitNote: React.FC = () => {
  const { rabbit_id } = useParams();
  const { data: rabbits } = useRabbitsQuery()
  const { data: saveNoteId, mutate } = useSaveNoteMutation()
  const [noteId, setNoteId] = useState<string | undefined>()

  useEffect(() => {
    setNoteId(saveNoteId)
  }, [saveNoteId])

  const rabbit = useMemo(() => {
    return rabbits?.find(({id}) => id === rabbit_id)
  }, [rabbit_id, rabbits])

  const onDateChange = () => {
    setNoteId(undefined)
  }

  return <>
    <h1>Note pour {rabbit?.name}</h1>
    <TextNoteForm 
      id={noteId} 
      onDateChange={onDateChange}
      onSubmit={request => mutate(request)}
    />
  </>
}
