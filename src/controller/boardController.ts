import {Request, Response, NextFunction} from 'express'
import * as boardService from "../service/boardService";
import { logger } from "../config/logger";
import { boardGroupDto } from "../interface/boardGroupDto";

//Detail Page
function boardGroupMain(req:Request, res:Response){
    // let guest_id : number = Number(req.query.gid); //check gid

    // if(isNaN(guest_id)){    // 숫자 타입 체크
    //     logger.info({
    //         label:"[guestBookDetail]",
    //         message: `req.query.gid 값(${guest_id})이 숫자가 아님`
    //     })
    //     res.json({"message" : "Parameter ERR!"})
    // }//end if

    boardService.findAll_Group()
        .then(
            (result)=>{
                res.json(result)
            }
        )//end then
        .catch(
            (err)=>{
                logger.info({
                    label:"[Board Group]",
                    message: `err : `+ err
                })
                res.json({"message" : err})
            }
        )//end catch
}

//Detail Page
function boardGroupCreate(req:Request, res:Response){
    let bodyData : boardGroupDto ={
        "name":req.body.name,
        "description":req.body.description,
        "authority":req.body.authority
    }
    boardService.create_Group(bodyData)
        .then(
            (result)=>{
                res.json({"message":result})
            }
        )//end then
        .catch(
            (err)=>{
                logger.error({
                    label:"[BoardController.ts - boardGroupCreate]",
                    message: `\n\t└ err : `+ err
                })
                res.json({"message" : err})
            }
        )//end catch
}
export{
    boardGroupMain,
    boardGroupCreate
}