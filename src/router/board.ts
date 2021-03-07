import * as boardController from '../controller/board/boardGroupController';
import * as boardContentController from '../controller/board/boardContentController';
import express from 'express'
const boardRouter = express.Router();

//==========================================================================================
//  Board Group AREA
//==========================================================================================  

//Board Group Create
boardRouter.post('/group/create', boardController.boardGroupCreate)

//Board Group Read All
boardRouter.get('/group/main', boardController.boardGroupMain)

//Board Group Update
boardRouter.post('/group/update', boardController.boardGroupModify)

//Board Group Delete
boardRouter.post('/group/delete', boardController.boardGroupRemove)

//==========================================================================================
//  Board Content AREA
//========================================================================================== 
var upload = require('../middleware/multer');
//Board Content Create
boardRouter.post(
    '/content/create', 
    upload.fields([{name:'image', maxCount:1}, {name:'file', maxCount:1}]),
    boardContentController.boardContentCreate
)

// boardRouter.get('/detail', boardController.boardGroupMain)

// guestBookRouter.get('/main', guestBookMain)

export default boardRouter;