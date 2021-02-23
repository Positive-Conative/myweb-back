import {getConnection} from "typeorm";
import { guestBooksRepo } from "../repository/guestBookRepo";

async function findOne(){
  const connection = getConnection();
  const userRepository2 = connection.getCustomRepository(guestBooksRepo);
  const timber = await userRepository2.findById(1);
  console.log(timber)
  return timber;
}
export {findOne}