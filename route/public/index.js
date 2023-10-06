import express from "express";
import path from "path";
import { dirname } from 'path';

const router = express.Router();

router.get('/',function(req,res){
  const __dirname = path.resolve();
  res.sendFile(path.join(__dirname+'/view/index.html'));
});
 
export default router