import express, {Request, Response, NextFunction} from 'express'
import "reflect-metadata";
import {Users} from "../entity/Users";
import {Board} from "../entity/Board";
import {getConnection} from "typeorm";
const guestBookRouter = express.Router();

import {guestBookMain} from '../controller/guestbook/guestBookController';
guestBookRouter.get('/fdsa', guestBookMain)


export default guestBookRouter;