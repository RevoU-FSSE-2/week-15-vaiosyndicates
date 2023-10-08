import { datas } from "../database/index.js"

export const getAllMovies = () => {
  return datas
}

export const postMovies = (data) => {
  datas.push(data)
  return datas
}

export const deleteMovies = (data) => {
  const index = datas.findIndex(key => key.id === `${data}`);
  if(index !== -1) {
    datas.splice(index,1);
    const resp = {
      responseCode: '00'
    }
    return resp
  } else {
    const resp = {
      responseCode: '404'
    }
    return resp
  }
}

