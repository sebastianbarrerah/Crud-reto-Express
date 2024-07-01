import { Request, Response } from "express";
import { loginService, registerServices, updateState } from "../services/user-services";


// login
export const validateUser = async (req:Request, res:Response) => {
    const email = req.body.email
    const password = req.body.password
    if (!email || ! password) return res.status(404).json({message: "Debe tener email y contraseña"});
    if (email || password ) {
        try {
            const response = await loginService( email, password );
            if(response === null) return res.status(404).json({message: "Usuario no encontrado"})
            res.send(response)
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Fallo al ingresar"})
        }    
    }else{
        return res.status(404).json({message: "Falta contraseña o correo"});
    }
}

// Registro de usuario
export const registerUser = async (req:Request, res:Response) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    if (!email || !name || !password) return res.status(404).json({message: "Faltan datos para crear usuario"})
    try {
        const response = await registerServices(req.body);
        if(response == null) return res.status(404).json({message: "Usuario ya registrado"});
        res.send(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error al registrar el usuario"})
    }
}
    // Actualizar estado
export const updateUser = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const response = await updateState(id)
        res.send(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error actualizando datos del user"})
    }
}