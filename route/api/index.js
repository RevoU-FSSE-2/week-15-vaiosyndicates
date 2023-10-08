import express from "express";
import path from "path";
import { dirname } from 'path';
import cors from 'cors'
import {
  testFetch,
  testPost,
  testDelete
} from "../../controller/index.js";
import { requestIdMiddleware } from "../../middleware/index.js";

const app = express();

let corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://127.0.0.1:7000'],
  optionsSuccessStatus: 200
};


const apirouter = express.Router();

apirouter.get('/test', cors(corsOptions), requestIdMiddleware, testFetch)
apirouter.post('/test/add', cors(corsOptions), requestIdMiddleware, testPost)
apirouter.delete('/test/delete', cors(corsOptions)  ,requestIdMiddleware, testDelete)
 
export default apirouter