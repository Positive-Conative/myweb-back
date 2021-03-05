import express from 'express'
import { createConnection } from 'typeorm';
import bodyParser from 'body-parser';

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   }),
// );
import indexRouter from "./router/index";
import introduceRouter from "./router/introduce";
import boardRouter from "./router/board";
import guestBookRouter from "./router/guestBook";

//DB connect
createConnection()
.then(async connection => {
    interface Error {   //err handler 추가해야함..!
      status?: number;
      message?: string;
    }
    const app = express()
    //body-parser 설정
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use("/", indexRouter);

    app.use("/intro", introduceRouter);

    app.use("/board", boardRouter);

    app.use("/guestbook", guestBookRouter);

    app.listen(8082, ()=>{
        console.log("SERVER RUN")
    })
}).catch(err=>console.log(err))





//test
// export default app;