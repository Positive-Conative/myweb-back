import {Request, Response, NextFunction} from 'express'
import * as boardContentService from "../../service/board/boardContentService";
import { logger } from "../../config/logger";
import { boardContentDto } from "../../interface/boardContentDto";

//Create Page(데이터 추가)
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
                res.json({"message" : "알 수 없는 오류가 발생하였습니다!"})
            }
        )//end catch
}

//Main Page(메인 페이지)
function boardContentMain(req:Request, res:Response){
    let page : number = Number(req.query.page); //check gid

    if(isNaN(page)){    // 숫자 타입 체크
        logger.info({
            label:"[BoardContentController.ts - boardContentMain]",
            message: `req.query.page 값(${req.query.page})이 숫자가 아님`
        })
        res.json({"message" : "Parameter ERR!"})
    }//end if

    boardContentService.findAll_Content()
        .then(
            (result: any)=>{
                res.json({"message":result})
            }
        )//end then
        .catch(
            (err: any)=>{
                logger.error({
                    label:"[BoardContentController.ts - boardContentMain]",
                    message: `\n\t└ err : ${err} `
                })
                res.json({"message" : "알 수 없는 오류가 발생하였습니다!"})
            }
        )//end catch
}
export{
    boardContentCreate,
    boardContentMain
}