import { logger } from "../config/logger";
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req : Request, file : any, cb : any) {
      if(file.fieldname == 'image') cb(null, 'src/public/upload/images')
      else if(file.fieldname == 'file') cb(null, 'src/public/upload/files')
      else{
        logger.error({
            label:"[Multer.ts - ETC]",
            message: `\n\t└ err : `+ "fieldname이 image도 아니며, file도 아닙니다."
        })
      }
    },
    filename: function (req : Request, file : any, cb : any) {
      cb(null, file.originalname) 
    }
  })

var upload = multer({ storage: storage });

module.exports = upload;