import { connect } from 'mongoose';

export async function connectDB(): Promise<void> {
    await connect('mongodb+srv://foresy_apis:1234567890@cluster0.dt7ml.mongodb.net/sensor?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}