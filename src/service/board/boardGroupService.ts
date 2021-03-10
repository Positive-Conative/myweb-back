import { boardGroupRepo } from "../../model/repository/board/boardGroupRepo";
import { boardGroupDto } from "../../interface/boardGroupDto";
import { logger } from "../../config/logger";

//Group 전체 출력
async function findAll_Group(){
  const bgr = new boardGroupRepo;
  try{
    return await bgr.findAll()
  }catch(err){
    logger.error({
      label:"[boardService.ts - findAll_Group]",
      message: `\n\t└ err : ${err}`
    })
    return `Database Select ERR.`;
  }
}

//Group 추가
async function create_Group(bodyData:boardGroupDto){
  const bgr = new boardGroupRepo;
  try{
    await bgr.insertGroup(bodyData)
    return "성공적으로 추가되었습니다.";
  }catch(err){
    logger.error({
      label:"[boardService.ts - create_Group]",
      message: `\n\t└ err : ${err}`
    })
    return `Database Insert ERR.`;
  }
  // console.log(timber.user.email)
}

//Group 수정
async function modify_Group(bodyData:boardGroupDto){
  const bgr = new boardGroupRepo;
  try{
    return await bgr.modifyGroup(bodyData)
    // if(db_result.raw.affectedRows) return "성공적으로 수정되었습니다.";
    // else return "수정된 내역이 없습니다.";
  }catch(err){
    logger.error({
      label:"[boardService.ts - create_Group]",
      message: `\n\t└ err : ${err}`
    })
    return `Database Insert ERR.`;
  }
  // console.log(timber.user.email)
}

//Group 삭제
async function remove_Group(guest_id:number){
  const bgr = new boardGroupRepo;
  try{
    var db_result = await bgr.removeGroup(guest_id)
    if(db_result.raw.affectedRows) return "성공적으로 삭제되었습니다.";
    else return "삭제된 내역이 없습니다.";
  }catch(err){
    logger.error({
      label:"[boardService.ts - remove_Group]",
      message: `\n\t└ err : ${err}`
    })
    return `Database Insert ERR.`;
  }
  // console.log(timber.user.email)
}

export {
  findAll_Group,
  create_Group,
  modify_Group,
  remove_Group
}