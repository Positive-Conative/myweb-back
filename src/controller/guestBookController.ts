import {Request, Response, NextFunction} from 'express'
// import { userDto } from "../../interface/userDto";
import { findOne, findAll } from "../service/guestBookService";

function guestBookMain(req:Request, res:Response ){ 
    findAll().then(
        (result)=>{
            res.send(result)
        }
    )
}
function usertest(req:Request, res:Response ){ 
    findOne()
}
export {guestBookMain}