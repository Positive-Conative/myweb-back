import express, {Request, Response, NextFunction} from 'express'
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "../entity/User";
import {Board} from "../entity/Board";
import {boardRepo} from "../repository/boardRepo";

const indexRouter = express.Router();

indexRouter.get('/', (req:Request, res:Response, next)=>{
    /*
    var hello=createConnection().then(async connection => {
        console.log("Inserting a new user into the database...");
        const user = new User();
        user.pw = "Timber";
        await connection.manager.save(user);
        const users = await connection.manager.find(User);
        console.log("Loaded users: ", users);
        return users
        // await connection.close();
        // console.log("Here you can setup and run express/koa/any other framework.");
    }).catch(error => console.log(error));

    res.send(hello)
*/
})
import {getConnection} from "typeorm";

indexRouter.get('/active_record', async (req:Request, res:Response, next)=>{
    const timber = await User.findByName(1, "Timber");
    console.log(timber);
    res.send("fdsa")
    // const user = new User();
    // user.id = 1;
    // user.pw = "Saw";
    // const users = await user.findByName(1, "Timber");
    
    // await user.save();
})

indexRouter.get('/data_mapper', async (req:Request, res:Response, next:NextFunction)=>{
    const connection = getConnection();
    const userRepository = connection.getRepository(Board);
    const user = new Board();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.isActive = true;
    await userRepository.save(user);
    res.send("OK!!!")
})

export default indexRouter;