import {Request, Response, NextFunction} from 'express'
import * as boardContentService from "../../service/board/boardContentService";
import { logger } from "../../config/logger";
import { boardContentDto } from "../../interface/boardContentDto";

//Insert Page(데이터 추가)
function boardContentCreate(req:Request, res:Response){
    
    let files : any = req.files;
    let bodyData : boardContentDto ={
        "title": req.body.title,
        "content": req.body.content,
        "file_src": files.input_image[0].originalname,
        "image_src": files.input_file[0].originalname,
        "user": {"email": req.body.userEmail},
        "board_groups": {"group_id": req.body.group_id}
    }

    boardContentService.create_Content(bodyData)
        .then(
            (result: any)=>{
                res.json({"message":result})
            }
        )//end then
        .catch(
            (err: any)=>{
                logger.error({
                    label:"[BoardContentController.ts - create_Content]",
                    message: `\n\t└ input data(form) : ${bodyData} \n\t└ err : ${err} `
                })
                res.json({"message" : err})
            }
        )//end catch
}
export{
    boardContentCreate
}