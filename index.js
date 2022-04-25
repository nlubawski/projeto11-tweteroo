import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let usuarios = [];
let tweets = []

app.post("/sign-up", (req,res) => {
  usuarios.push(req.body);
  console.log(usuarios)
  res.send("OK")
})

app.get("/tweets", (req,res)=>{
  const ultimosDezTweets = tweets.slice(-10)
  ultimosDezTweets.reverse()
  res.send(ultimosDezTweets)
})

app.post("/tweets", (req,res) => {
  const tweetIncompleto = req.body;
  const procuraUsuario = usuarios.find((usuario)=>{
    return tweetIncompleto.username === usuario.username});
  
  const avatar = procuraUsuario.avatar;
  const tweetCompleto = {avatar,...tweetIncompleto}
  tweets.push(tweetCompleto)
  res.send("OK")
})

app.listen(5000);
