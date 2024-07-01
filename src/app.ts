import { deleteNota, getData, postNota, updateTheNota } from "./routes/notas";
import { loginPage, registerPage } from "./routes/user-route";
import "dotenv/config";
import cors from "cors";
import db from "./database/db.mongo";
import express from "express";
const PORT = process.env.PORT || 3001
const app = express();
app.use(express.json())
app.use(cors())
app.listen(PORT, () => {
    console.log(`app  corriendo por el puerto ${PORT}`)
})
db().then(() => console.log("Conexion a la base de datos")).catch((error) => console.error("Error en la conexión", error))
app.use(getData, updateTheNota, deleteNota, postNota, registerPage, loginPage)


