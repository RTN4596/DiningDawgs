import mongoose from "mongoose";

const connectMongoDB = async () : Promise<void> => {
    if (mongoose.connection.readyState === 0) {
        try {
            const uri = process.env.MONGODB_URL;
            if (!uri) {
                throw new Error("MONGODB_URL is not defined");
            }
            await mongoose.connect(uri);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.log("Error connecting to MongoDB:", (error as Error).message);
        }
    } else {
        console.log('MongoDB already connected');
    }
};

export default connectMongoDB;