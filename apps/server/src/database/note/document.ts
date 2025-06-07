import {
  getModelForClass,
  mongoose,
  prop,
} from '@typegoose/typegoose';

class Note {
  @prop({ required: true, type: Date })
  public date!: Date;

  @prop({ required: true, type: String })
  public content!: string;
}

export type NoteDocument = mongoose.Document & Note;
export const NoteModel = getModelForClass(Note);
