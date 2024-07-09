"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notas_1 = require("./routes/notas");
const user_route_1 = require("./routes/user-route");
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const db_mongo_1 = __importDefault(require("./database/db.mongo"));
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(PORT, () => {
    console.log(`app corriendo por el puerto ${PORT}`);
});
(0, db_mongo_1.default)().then(() => console.log("Conexion a la base de datos")).catch((error) => console.error("Error en la conexión", error));
app.use(notas_1.getData, notas_1.updateTheNota, notas_1.deleteNota, notas_1.postNota, user_route_1.registerPage, user_route_1.loginPage);
