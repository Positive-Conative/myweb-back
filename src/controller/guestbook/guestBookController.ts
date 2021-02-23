import {Request, Response, NextFunction} from 'express'
// import { userDto } from "../../interface/userDto";
import { findOne } from "../../service/guestBookService";

function guestBookMain(req:Request, res:Response ){ 
    findOne()
}
export {guestBookMain}