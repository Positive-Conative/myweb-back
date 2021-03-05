import * as boardController from '../controller/boardController';
import express from 'express'
const boardRouter = express.Router();

//Board Group 확인 
boardRouter.get('/group/main', boardController.boardGroupMain)

//Board Group 제작
boardRouter.post('/group/insert', boardController.boardGroupCreate)
// boardRouter.get('/detail', boardController.boardGroupMain)

// guestBookRouter.get('/main', guestBookMain)

export default boardRouter;