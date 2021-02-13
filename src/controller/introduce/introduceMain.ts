import express, { Request, Response } from 'express'
const router = express.Router();
function introduceMain(req:Request, res:Response){ 

    var hello : string = req.body.id
    res.json({"id":hello})
}
export {introduceMain}