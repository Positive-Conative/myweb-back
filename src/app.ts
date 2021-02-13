import express, {Request, Response} from 'express'
import { createConnection } from 'typeorm';
import {boardRepo} from "./repository/boardRepo";
import {Board} from "./entity/Board";

const app = express()
//DB connect
createConnection()
  .then(async connection => {
    interface Error {//err handler 추가해야함..!
      status?: number;
      message?: string;
    }
    // const userRepository = connection.getRepository(Board);
    // const user = new Board();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.isActive = true;
    // await userRepository.save(user);


    // const timber = await boardRepo(1, "Timber");
    // const userRepository : any = connection.getCustomRepository(boardRepo);
    // const timber = await userRepository.findByName("Timber", "Saw");
    // console.log(timber)
})
.catch(err=>console.log(err))

import indexRouter from "./router/index";
app.use("/", indexRouter);

app.listen(8088, ()=>{
    console.log("SERVER RUN")
})


//test
// export default app;