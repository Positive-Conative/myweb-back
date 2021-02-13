import express, {Request, Response, NextFunction} from 'express'
import "reflect-metadata";
import {User} from "../entity/User";
import {Board} from "../entity/Board";
import {getConnection} from "typeorm";

const indexRouter = express.Router();

indexRouter.post('/', (req:Request, res:Response, next)=>{
    console.log(req.body.id)
    var hello : string = req.body.id
    res.json({"id":hello})
})

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