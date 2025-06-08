import { Request, Response } from 'express';
import { Factory } from '../factory'
import { SaveNoteResponse } from '@pinou/api'

interface UpsertTextNoteHandlerPayload {
  date: string;
  rabbit_id: string
  content: string
}

export const saveNoteHandler = async (req: Request, res: Response) => {
  const payload: UpsertTextNoteHandlerPayload = req.body;

  const text_note_id = await Factory.textNote().commands.saveNote({
    ...payload,
    date: new Date(payload.date),
  });

  const response: SaveNoteResponse = {
    status: 'success',
    data: {
      id: text_note_id
    }
  }

  res.json(response);
};
