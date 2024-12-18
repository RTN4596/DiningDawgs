import {Schema, Document, Model} from "mongoose";
import mongoose from "mongoose";
import connectMongoDB from "../libs/mongodb";

connectMongoDB()
    .then(() => console.log('MongoDB connected:', mongoose.connection.readyState))

export interface IUser extends Document {
    //user_id: string;
    username: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    /*user_id: {
      type: String,
      required: true,
      unique: true,
    },*/
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
});

const User: Model<IUser> = mongoose.models?.User || mongoose.model<IUser>('User', UserSchema);

console.log('User model:', User);

export default User;