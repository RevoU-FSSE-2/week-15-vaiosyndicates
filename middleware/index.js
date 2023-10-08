import { v4 as uuidv4 } from 'uuid';
import cors from 'cors'
import express from "express";

const app = express();

export const requestIdMiddleware = (req, res, next) => {
  if (req.headers['x-request-id']) {
    res.setHeader("x-request-id", req.headers['x-request-id'])
    req.request_id = req.headers['x-request-id']
  } else {
    const uuid = uuidv4()
    res.setHeader("x-request-id", uuid)
    req.request_id = uuid
  }
  next()
}