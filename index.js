import express from 'express'
import {
  router,
  apirouter
} from './route/index.js';
import bodyParser from 'body-parser';
import cors from 'cors'


const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())

app.use("/", router);
app.use("/api", apirouter);

app.listen(port);
console.log('Server started at http://localhost:' + port);