import {getConnection} from "typeorm";
import {User} from "../entity/User";
import { userDto } from "../interface/userDto";
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
  const userRepository = connection.getRepository(User);
  const user = userDto;
  userRepository.save(user);
  console.log("FDAS1")
  return "ok";
}

export {addUser}