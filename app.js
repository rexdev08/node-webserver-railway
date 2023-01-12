import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import hbs from "hbs";
import * as dotenv from 'dotenv'
dotenv.config()


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT;


//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node"
  });
});

app.get("/generic", (req, res) => {
  // res.sendFile(__dirname + "/public/elements.html");
  res.render("generic", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node"
  })
});
app.get("/elements", (req, res) => {
  // res.sendFile(__dirname + "/public/generic.html");
  res.render("elements", {
    nombre: "Fernando Herrera",
    titulo: "Curso de Node"
  })
});

app.get("*", (req, res) => {
  res.writeHead(404);
  res.write("Page not Found");
  res.end();
});

app.listen(port, () => {
  console.log("servidor escuchando en el puerto: ", port);
});
