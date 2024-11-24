import mongoose, {Schema, Document, Model} from "mongoose";

interface Review extends Document {
    title: string;
    dining_hall: string;
    food_name: string;
    description?: string;
    rating: number;
    updated_date: Date;
    username: string;
}

const ReviewSchema = new Schema<Review>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dining_hall: {
        type: String,
        required: true
    },
    food_name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        required: true
    }
})

if (mongoose.models.Review) {
    delete mongoose.models.Review;
}

const Review: Model<Review> = mongoose.models.Review || mongoose.model<Review>("Review", ReviewSchema);

export default Review;