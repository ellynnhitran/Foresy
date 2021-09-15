import { Schema, model } from 'mongoose';



export class HeartRate {
    public id: string;
    public device_id: string;
    public value: number;
    public timestamp: number;

    constructor();
    constructor(obj: HeartRate);
    constructor(obj?: any) {
        this.id = obj?.id || "";
        this.device_id = obj?.device_id || "";
        this.value = obj?.value || "";
        this.timestamp = obj?.timestamp || "";

    }
}


const heartRateSchema = new Schema({
    id: { type: String, required: true },
    device_id: String,
    value: Number,
    timestamp: Number,
})

export const HeartRateModel = model('HeartRate', heartRateSchema);