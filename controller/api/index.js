import  { getAllMovies, postMovies }  from "../../repository/index.js";

export const testFetch = async (req, res) => {
  const data = await getAllMovies()
  // console.log(datas)
  res.status(200).json({
    responseCode: 200,
    reqId: req.request_id, 
    message: "success", 
    data: data, 
  });
}

export const testPost = async (req, res) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  const data = await postMovies(obj)

  res.status(200).json({
    responseCode: 200,
    reqId: req.request_id, 
    message: "Success add data", 
    data: data, 
  });

}