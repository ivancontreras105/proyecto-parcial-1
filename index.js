const express = require("express");
const dotEnv = require("dotenv");
const defaultRouter = require("./routers/principal");

const app = express();

dotEnv.config();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use("/", defaultRouter);

app.listen(process.env.PUERTO, ()=>{
    console.log("funciona");
});