import {
  getModelForClass,
  modelOptions,
  mongoose,
  prop
} from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { _id: false } })
class Ingredient {
  @prop({
    required: true,
    type: mongoose.Types.ObjectId
  })
  public food_id!: string

  @prop({ required: true })
  public quantity!: number
}

class Meal {
  @prop({ required: true })
  public date!: string

  @prop({
    required: true,
    type: mongoose.Types.ObjectId
  })
  public rabbit_id!: string

  @prop({ required: true, type: [ Ingredient ] })
  public ingredients!: Ingredient[]
}

export type MealDocument = mongoose.Document & Meal
export const MealModel = getModelForClass(Meal)
