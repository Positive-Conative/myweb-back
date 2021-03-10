import * as boardGroupController from '../controller/board/boardGroupController';
import * as boardContentController from '../controller/board/boardContentController';
import express from 'express'
const boardRouter = express.Router();

//==========================================================================================
//  Board Group AREA
//==========================================================================================  

//Board Group Create
boardRouter.post('/group/create', boardGroupController.boardGroupCreate)

//Board Group Read All
boardRouter.get('/group/main', boardGroupController.boardGroupMain)

//Board Group Update
boardRouter.post('/group/update', boardGroupController.boardGroupModify)

//Board Group Delete
boardRouter.post('/group/delete', boardGroupController.boardGroupRemove)

//==========================================================================================
//  Board Content AREA
//========================================================================================== 
var upload = require('../middleware/multer');
//Board Content Create
boardRouter.post(
    '/content/create', 
    upload.fields([{name:'input_image', maxCount:1}, {name:'input_file', maxCount:1}]),
    boardContentController.boardContentCreate
)
//Board Content Read All
boardRouter.get('/content/main', boardContentController.boardContentMain)

// boardRouter.get('/detail', boardController.boardGroupMain)

// guestBookRouter.get('/main', guestBookMain)

export default boardRouter;