import {getConnection} from "typeorm";
import {Users} from "../model/entity/Users";
import { userDto } from "../interface/userDto";
import { boardRepo } from "../model/repository/boardRepo1";
// export default class UserService() {
//   async addUser(User){
//     const connection = getConnection();
//     const userRepository = connection.getRepository(User);
//     const user = new User();
//     user.id = 1;
//     user.pw = "fdsa";
//     await userRepository.save(user);
//   }
// }
function addUser(userDto:userDto){
  // const connection = getConnection();
  // const userRepository = connection.getRepository(User);
  // const user = new User();
  // user.pw = "fdsa";
  // userRepository.save(user);
  // console.log("FDAS1")
  // return "ok";

  const connection = getConnection();
  const userRepository = connection.getRepository(Users);
  const user = userDto;
  userRepository.save(user);
  console.log("FDAS1")
  return "ok";
}

async function findUser(){
  const connection = getConnection();
  const userRepository2 = connection.getCustomRepository(boardRepo);
  const timber = await userRepository2.findByName("Timber", "Saw");
  console.log(timber)
  return timber;
}
export {addUser, findUser}