import express from "express";
import path from "path";
import { dirname } from 'path';
import cors from 'cors'
import {
  testFetch,
  testPost
} from "../../controller/index.js";
import { requestIdMiddleware } from "../../middleware/index.js";

const app = express();


let corsOptions = {
  origin: ['http://127.0.0.1:5500', 'http://127.0.0.1:7000' ],
  optionsSuccessStatus: 200
};

let corsOptionsPost = {
  origin: 'http://127.0.0.1:7000',
  methods: ['GET', 'POST'],
}

app.use(cors());

const apirouter = express.Router();

apirouter.get('/test', cors(corsOptions), requestIdMiddleware, testFetch)
apirouter.post('/test/add', cors(corsOptionsPost), requestIdMiddleware, testPost)
 
export default apirouter