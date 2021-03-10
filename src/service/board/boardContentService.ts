import { boardContentRepo } from "../../model/repository/board/boardContentRepo";
import { boardContentDto } from "../../interface/boardContentDto";
import { logger } from "../../config/logger";

//Content 추가
async function create_Content(bodyData:boardContentDto){
  const bgr = new boardContentRepo;
  try{
    await bgr.insertContent(bodyData)
    return "성공적으로 추가되었습니다.";
  }catch(err){
    logger.error({
      label:"[boardContentService.ts - create_Content]",
      message: `\n\t└ err : ${err}`
    })
    return `Database Insert ERR.`;
  }
  // console.log(timber.user.email)
}

//Content Main
async function findAll_Content(){
  const bgr = new boardContentRepo;
  try{
    return await bgr.findAll()
    // return "성공적으로 추가되었습니다.";
  }catch(err){
    logger.error({
      label:"[boardContentService.ts - create_Content]",
      message: `\n\t└ err : ${err}`
    })
    return `Database Insert ERR.`;
  }
  // console.log(timber.user.email)
}
export {
  create_Content,
  findAll_Content
}