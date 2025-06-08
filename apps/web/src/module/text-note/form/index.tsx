import React, { FormEvent, useEffect, useState } from 'react'
import { SaveNoteRequest } from '@pinou/api'
import { useNoteQuery } from '../query'

interface Props {
  onSubmit: (request: SaveNoteRequest) => void
}

export const TextNoteForm: React.FC<Props> = ({ onSubmit }) => {
  const [request, setRequest] = useState<Partial<SaveNoteRequest>>({
    date: new Date().toISOString().slice(0, 10)
  })

  const { data: note } = useNoteQuery(request.date)

  useEffect(() => {
    if (note)  {
      setRequest({ 
        date: request.date, 
        content: note.content
      })
    } else {
      setRequest({ 
        date: request.date, 
        content: undefined
      })
    }

  }, [request.date, note])
  
  const isRequestComplete = (request: Partial<SaveNoteRequest>): request is SaveNoteRequest => {
    return Boolean(request.date) && Boolean(request.content)
  }

  const handleChangeDate = (date: string) => {
    setRequest({
      ...request,
      date
    })
  }

  const handleChangeContent = (content: string) => {
    setRequest({
      ...request,
      content
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const is_request_complete = isRequestComplete(request)
    if (is_request_complete) {
      onSubmit(request)
    }
  }
  
  return <form onSubmit={handleSubmit}>
    <p>
      <label htmlFor="note-date" >Date de la note</label>
      <input 
        type="date" 
        placeholder="Date" 
        id="note-date" 
        value={request.date} 
        onChange={(event) => handleChangeDate(event?.target.value)}
      />
    </p>

    <p>
      <label htmlFor="note-content">Contenu de la note</label>
      <textarea 
        id="note-content" 
        onChange={(event) => handleChangeContent(event?.target.value)} 
        value={request.content ?? ''}
      />
    </p>
    <input type="submit" value="Enregistrer" />
  </form>
}