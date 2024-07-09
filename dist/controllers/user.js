"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.registerUser = exports.validateUser = void 0;
const user_services_1 = require("../services/user-services");
// login
const validateUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password)
        return res.status(404).json({ message: "Debe tener email y contraseña" });
    if (email || password) {
        try {
            const response = await (0, user_services_1.loginService)(email, password);
            if (response === null)
                return res.status(404).json({ message: "Usuario no encontrado" });
            res.send(response);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Fallo al ingresar" });
        }
    }
    else {
        return res.status(404).json({ message: "Falta contraseña o correo" });
    }
};
exports.validateUser = validateUser;
// Registro de usuario
const registerUser = async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    if (!email || !name || !password)
        return res.status(404).json({ message: "Faltan datos para crear usuario" });
    try {
        const response = await (0, user_services_1.registerServices)(req.body);
        if (response == null)
            return res.status(404).json({ message: "Usuario ya registrado" });
        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al registrar el usuario" });
    }
};
exports.registerUser = registerUser;
// Actualizar estado
const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await (0, user_services_1.updateState)(id);
        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error actualizando datos del user" });
    }
};
exports.updateUser = updateUser;
