import * as boardController from '../controller/boardController';
import express from 'express'
const boardRouter = express.Router();

//Board Group Select All
boardRouter.get('/group/main', boardController.boardGroupMain)

//Board Group Insert
boardRouter.post('/group/insert', boardController.boardGroupCreate)

//Board Group Update
boardRouter.post('/group/update', boardController.boardGroupModify)

// boardRouter.get('/detail', boardController.boardGroupMain)

// guestBookRouter.get('/main', guestBookMain)

export default boardRouter;