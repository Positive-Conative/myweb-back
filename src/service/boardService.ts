import {getConnection} from "typeorm";
import { boardGroupRepo } from "../model/repository/boardGroupRepo";
import { boardGroupDto } from "../interface/boardGroupDto";

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
  const connection = getConnection();
  const boardRepoData = connection.getCustomRepository(boardGroupRepo);
  const db_data = await boardRepoData.saveGroup(bodyData);
  // console.log(timber.user.email)
  return db_data;
}

export {
  findAll_Group,
  create_Group
}