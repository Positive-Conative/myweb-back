import express from 'express'
import { createConnection } from 'typeorm';
import bodyParser from 'body-parser';
const app = express()

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   }),
// );

//DB connect
createConnection()
.then(async connection => {
    interface Error {   //err handler 추가해야함..!
      status?: number;
      message?: string;
    }
}).catch(err=>console.log(err))

//body-parser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import indexRouter from "./router/index";
app.use("/", indexRouter);

import introduceRouter from "./router/introduce";
app.use("/intro", introduceRouter);

import boardRouter from "./router/board";
app.use("/board", boardRouter);

import guestBookRouter from "./router/guestBook";
app.use("/guestbook", guestBookRouter);

app.listen(8082, ()=>{
    console.log("SERVER RUN")
})



//test
// export default app;