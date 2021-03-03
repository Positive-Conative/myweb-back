import {Request, Response, NextFunction} from 'express'
// import { userDto } from "../../interface/userDto";
import { findOne, findAll } from "../service/guestBookService";
import { logger } from "../config/logger";

function guestBookMain(req:Request, res:Response ){ 
    findAll().then(
        (result)=>{
            res.send(result)
        }
    )
}

function guestBookDetail(req:Request, res:Response){
    let guest_id : unknown = req.query.gid;
    if(isNaN(Number(guest_id))){
        logger.info({
            label:"guestBookDetail",
            message: "req.query.gid 값이 숫자가 아님: " + guest_id
        })
    }
    
}

function usertest(req:Request, res:Response ){ 
    findOne()
}

//type gard
function isNumber(val: string | number): val is number {
    return typeof val === 'number';
}

export {
    guestBookMain,
    guestBookDetail
}