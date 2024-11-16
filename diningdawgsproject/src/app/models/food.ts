import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFood extends Document {
  food_name: string;
  dining_hall: string;
}

const FoodSchema: Schema = new Schema({
  food_name: {
    type: String,
    required: true,
    unique: true,
  },
  dining_hall: {
    type: String,
    required: true,
  },
});

const Food: Model<IFood> = mongoose.models.Food || mongoose.model<IFood>('Food', FoodSchema);

export default Food;