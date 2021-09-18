import {HeartRate, HeartRateModel} from '@models/heart-rate.model';


export default class UserService{

    private userModel: typeof HeartRateModel;

    constructor(){
        this.userModel = HeartRateModel;
    }

    async create(user: HeartRate): Promise<void>{
        await this.userModel.create(user, (err, data) => {
            if (err) console.log("UserService -> create: ", err)
        })
    }

    async getList(): Promise<HeartRate[]>{
        let items : HeartRate[] = await this.userModel.find();
        return items
    }

    async delete(id: string): Promise<void>{
        await this.userModel.deleteOne({id})
    }

    async findOne(objQuery: object): Promise<HeartRate>{
        let item: HeartRate = await this.userModel.findOne(objQuery);
        return item
    }

    async findLatest(): Promise<HeartRate>{
        let item: HeartRate = await this.userModel.find({}).sort({_id: -1}).limit(1)
        return item
    }

}