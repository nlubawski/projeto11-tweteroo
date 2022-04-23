import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let usuarios = [];

app.post("/sign-up", (req,res) => {
  usuarios.push(req.body);
  console.log(usuarios)
  res.send("OK")
})


app.listen(5000);
