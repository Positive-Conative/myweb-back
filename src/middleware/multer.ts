// 공지사항 등록
// MULTER 설정

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req : Request, file : any, cb : any) {
      cb(null, 'src/public/upload/') 
    },
    filename: function (req : Request, file : any, cb : any) {
      cb(null, file.originalname) 
    }
  })
var upload = multer({ storage: storage });
  module.exports = upload;
