import express from 'express'
const guestBookRouter = express.Router();

import {guestBookMain} from '../controller/guestBookController';
guestBookRouter.get('/main', guestBookMain)

// guestBookRouter.get('/main', guestBookMain)

export default guestBookRouter;