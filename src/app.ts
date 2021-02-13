import express from 'express'
import { createConnection } from 'typeorm';
import bodyParser from 'body-parser';

const app = express()

//body-parser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

//DB connect
createConnection()
.then(async connection => {
    interface Error {   //err handler 추가해야함..!
      status?: number;
      message?: string;
    }
}).catch(err=>console.log(err))

import indexRouter from "./router/index";
app.use("/", indexRouter);

app.listen(8088, ()=>{
    console.log("SERVER RUN")
})


//test
// export default app;