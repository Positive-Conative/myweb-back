import {Request, Response, NextFunction} from 'express'
import * as boardService from "../../service/board/boardGroupService";
import { logger } from "../../config/logger";
import { boardGroupDto } from "../../interface/boardGroupDto";

//Main Page(전체 출력)
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
            (result: any)=>{
                res.json(result)
            }
        )//end then
        .catch(
            (err: any)=>{
                logger.error({
                    label:"[BoardController.ts - boardGroupMain]",
                    message: `\n\t└ err : ${err} `
                })
                res.json({"message" : err})
            }
        )//end catch
}

//Create Page(데이터 추가)
function boardGroupCreate(req:Request, res:Response){
    let bodyData : boardGroupDto ={
        "name":req.body.name,
        "description":req.body.description,
        "authority":req.body.authority
    }
    boardService.create_Group(bodyData)
        .then(
            (result: any)=>{
                res.json({"message":result})
            }
        )//end then
        .catch(
            (err: any)=>{
                logger.error({
                    label:"[BoardController.ts - boardGroupCreate]",
                    message: `\n\t└ input data(form) : ${bodyData} \n\t└ err : ${err} `
                })
                res.json({"message" : err})
            }
        )//end catch
}

//Update Page(데이터 수정)
function boardGroupModify(req:Request, res:Response){
    let bodyData : boardGroupDto ={
        "group_id"!:req.body.group_id,
        "name":req.body.name,
        "description":req.body.description,
        "authority":req.body.authority
    }
    boardService.modify_Group(bodyData)
        .then(
            (result: any)=>{
                res.json({"message":result})
            }
        )//end then
        .catch(
            (err: any)=>{
                logger.error({
                    label:"[BoardController.ts - boardGroupModify]",
                    message: `\n\t└ input data(form) : ${bodyData} \n\t└ err : ${err} `
                })
                res.json({"message" : err})
            }
        )//end catch
}

//Delete Page(데이터 삭제)
function boardGroupRemove(req:Request, res:Response){
    let guest_id : number = Number(req.body.group_id); //check gid
    if(isNaN(guest_id)){    // 숫자 타입 체크
        logger.error({
            label:"[BoardController.ts - boardGroupRemove]",
            message: `\n\t└ err : `+ 'guest_id값이 숫자가 아님.'
        })
        res.json({"message" : "Parameter ERR!"})
    }//end if

    boardService.remove_Group(guest_id)
        .then(
            (result: any)=>{
                res.json({"message":result})
            }
        )//end then
        .catch(
            (err: any)=>{
                logger.error({
                    label:"[BoardController.ts - boardGroupModify]",
                    message: `\n\t└ input data(guest_id) : ${guest_id} \n\t└ err : ${err} `
                })
                res.json({"message" : err})
            }
        )//end catch
}
export{
    boardGroupMain,
    boardGroupCreate,
    boardGroupModify,
    boardGroupRemove
}