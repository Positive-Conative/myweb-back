import {Request, Response, NextFunction} from 'express'
import { userDto } from "../../interface/userDto";
import { addUser, findUser } from "../../service/UserService";

function indexMain(req:Request, res:Response ){ 
    let bodyData : userDto = req.body
    console.log(bodyData)
    addUser(bodyData)
    // var hello : string = req.body.id
    // res.json({"id":hello})
}
function test(req:Request, res:Response){
    findUser()
}
export {indexMain, test}