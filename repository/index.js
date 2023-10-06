import { datas } from "../database/index.js"

export const getAllMovies = () => {
  return datas
}

export const postMovies = (data) => {
  datas.push(data)
  return datas
}