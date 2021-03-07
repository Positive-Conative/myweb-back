import {Request, Response, NextFunction} from 'express'
import * as boardService from "../../service/boardService";
import { logger } from "../../config/logger";
import { boardContentDto } from "../../interface/boardContentDto";

//Insert Page(데이터 추가)
function boardContentCreate(req:Request, res:Response){
    
    // let bodyData : boardContentDto ={
    //     "title": req.body.title,
    //     "content": req.body.content,
    //     "file_src": req.body.file_src,
    //     "image_src": req.body.image_src,
    //     "userEmail": req.body.userEmail,
    //     "boardGroupsGroupId": req.body.group_id
    // }
    console.log(req.body.title, req.body.content)
    // boardService.create_Group(bodyData)
    //     .then(
    //         (result: any)=>{
    //             res.json({"message":result})
    //         }
    //     )//end then
    //     .catch(
    //         (err: any)=>{
    //             logger.error({
    //                 label:"[BoardController.ts - boardGroupCreate]",
    //                 message: `\n\t└ err : `+ err
    //             })
    //             res.json({"message" : err})
    //         }
    //     )//end catch
}
export{
    boardContentCreate
}