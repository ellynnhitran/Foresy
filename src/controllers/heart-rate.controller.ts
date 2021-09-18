import StatusCodes, {  } from 'http-status-codes';
import { Request, Response } from 'express';
const { UNAUTHORIZED, CREATED, OK, BAD_GATEWAY , BAD_REQUEST} = StatusCodes;
import {HeartRate} from '@models/heart-rate.model';
import {HashMD5} from '@shared/functions'
import {v1 as uuidv1} from 'uuid'
import {JwtService} from '@services/jwt.service'
import HeartRateService from '@services/heart-rate.service'


export default class HeartRateController {
    private heartRateService: HeartRateService;

    constructor(){
        this.heartRateService = new HeartRateService();
    }

    async create(req: Request, res: Response){
        let heartRate = new HeartRate(req.body);
        if (!heartRate.device_id || !heartRate.value || !heartRate.timestamp) 
            return res.status(BAD_REQUEST).send({message: "Missing parameter"})

        try{
            heartRate.id = uuidv1()
            await this.heartRateService.create(heartRate)
            return res.status(OK).send({message: "Create successfully"})
        }
        catch(err){
            console.log(err)
            return res.status(BAD_GATEWAY).send({message: err})
        }
        
    }

    async list(req: Request, res: Response){
        try{
            let heartRates : HeartRate[] = await this.heartRateService.getList();
            return res.status(OK).send({data: {
                data: heartRates,
                length: heartRates.length,
            }});
        }
        catch(err){
            console.log(err)
            return res.status(BAD_GATEWAY).send({message: err})
        }
    }

    async latest(req: Request, res: Response){
        try{
            let heartRate: HeartRate = await this.heartRateService.findLatest();
            return res.status(OK).send({data: heartRate});
        }
        catch(err){
            console.log(err)
            return res.status(BAD_GATEWAY).send({message: err})
        }
    }
}