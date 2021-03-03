import * as guestBookController from '../controller/guestBookController';
import express from 'express'
const guestBookRouter = express.Router();

guestBookRouter.get('/main', guestBookController.guestBookMain)
guestBookRouter.get('/detail', guestBookController.guestBookDetail)

// guestBookRouter.get('/main', guestBookMain)

export default guestBookRouter;