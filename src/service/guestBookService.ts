import {getConnection} from "typeorm";
import { guestBooksRepo } from "../repository/guestBookRepo";


async function findAll(){
  const connection = getConnection();
  const guestRepoData = connection.getCustomRepository(guestBooksRepo);
  const db_data = await guestRepoData.findById(1);
  // console.log(timber.user.email)
  return db_data;
}

async function findOne(){
  const connection = getConnection();
  const userRepository2 = connection.getCustomRepository(guestBooksRepo);
  const timber = await userRepository2.findById(1);
  console.log(timber)
  // console.log(timber.user.email)
  return timber;
}


export {findOne, findAll}