import {getConnection} from "typeorm";
import { guestBooksRepo } from "../model/repository/guestBookRepo";

//전체 출력
async function findAll(){
  const connection = getConnection();
  const guestRepoData = connection.getCustomRepository(guestBooksRepo);
  const db_data = await guestRepoData.findAll();
  // console.log(timber.user.email)
  return db_data;
}

//
async function findDetail(gid : number){
  const connection = getConnection();
  const guestRepoData = connection.getCustomRepository(guestBooksRepo);
  const db_data = await guestRepoData.findById(gid);
  // console.log(timber.user.email)
  return db_data;
}


export {
  findAll,
  findDetail,
}