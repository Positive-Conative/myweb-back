import {getConnection} from "typeorm";
import { boardGroupRepo } from "../model/repository/boardGroupRepo";
import { boardGroupDto } from "../interface/boardGroupDto";
import { logger } from "../config/logger";

//Group 전체 출력
async function findAll_Group(){
  const connection = getConnection();
  const boardRepoData = connection.getCustomRepository(boardGroupRepo);
  const db_data = await boardRepoData.findAll();
  // console.log(timber.user.email)
  return db_data;
}

//Group 추가하기
async function create_Group(bodyData:boardGroupDto){
  const bgr = new boardGroupRepo;
  try{
    await bgr.saveGroup(bodyData)
    return "성공적으로 추가되었습니다.";
  }catch(err){
    logger.error({
      label:"[boardService.ts - create_Group]",
      message: `\n\t└ err : `+ err
    })
    return `Database Insert ERR.`;
  }
  // console.log(timber.user.email)
}

export {
  findAll_Group,
  create_Group
}