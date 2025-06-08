import { Request, Response } from 'express';

import { Factory } from '../factory'
import { FetchNoteResponse } from '@pinou/api'

export const getNoteHandler = async (
  req: Request,
  res: Response
) => {
  const date = req.params.date
  const rabbit_id = req.params.rabbit_id
  const note = await Factory.textNote().queries.getNote({ rabbit_id, date: new Date(date) });
  if (!note) {
    const response: FetchNoteResponse = { status: 'error' }
    res.json(response)
    return
  }

  const response: FetchNoteResponse = {
    status: 'success',
    data: {
      ...note,
      date: note.date.toJSON()
    }
  }
  
  res.json(response);
};
