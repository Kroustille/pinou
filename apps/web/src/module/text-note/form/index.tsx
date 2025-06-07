import React, { FormEvent, useEffect, useState } from 'react'
import { SaveNoteRequest } from '@pinou/api'

interface Props {
  id?: string
  onDateChange: () => void
  onSubmit: (request: SaveNoteRequest) => void
}

export const TextNoteForm: React.FC<Props> = ({ id, onDateChange, onSubmit }) => {
  const [request, setRequest] = useState<Partial<SaveNoteRequest>>({})
  const isRequestComplete = (request: Partial<SaveNoteRequest>): request is SaveNoteRequest => {
    return Boolean(request.date) && Boolean(request.content)
  }

  useEffect(() => {
    const date = new Date().toISOString().slice(0, 10);

    setRequest({
      date,
    })
  }, [])

  const handleChangeDate = (date: string) => {
    setRequest({
      ...request,
      date
    })

    onDateChange()
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
      onSubmit({
        ...request,
        id
      })
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
      <textarea id="note-content" onChange={(event) => handleChangeContent(event?.target.value)}/>
    </p>
    <input type="submit" value="Enregistrer" />
  </form>
}