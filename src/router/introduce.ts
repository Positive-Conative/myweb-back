import express from 'express'
const router = express.Router();

import {introduceMain} from '../controller/introduce/introduceMain';
router.get('/', introduceMain)

export default router;