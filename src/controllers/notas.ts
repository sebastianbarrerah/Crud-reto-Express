import { Request, Response } from "express";
import { addNotaService, deleteNotaService, getNotasService, updateNotaService } from "../services/nota.services";

// Traer todas las notas
export const getNotas = async (req:Request, res:Response) => {
    const response = await getNotasService(req.params.id)
    if(response.length === 0) return res.status(400).json({Message: "No hay notas"})
        try {
        return res.send(response);
    } catch (error) {
        res.status(500).json({Error: "Error al traer los datos"})
    }
}

// Agregar una nueva nota
export const addNewNota = async(  req: Request, res:Response) => {
    const { title, description, vencimiento } = req.body;
    const id = req.params.id;
        if(!description || !title || !vencimiento) return res.status(404).json  ("Faltan parametros")
    try {
        const response = await addNotaService(id ,req.body)
        res.send(response)
    } catch (error) {
        res.status(500).json({Error: "Error al crear usuario"})
    }
}

// Actulizar una nota
export const updateNota = async (req: Request, res:Response) => {
    const id = req.params.id
    if(!id) return res.status(404).json({message: "Error al actualizar, faltan parametros"})
    try {
        const response = await updateNotaService(id, req.body);
        res.send(response)
    } catch (error) {
        res.status(500).json({Error: "Error al actualizar"})
    }
}
    // Eliminar una nota
export const removeNota = async ({params}: Request, res:Response) => {
    const {id} = params;
    if (!id) return res.status(404).json({Message: "No se pudo eliminar la nota"})
    try {
        const response = await deleteNotaService(id);
        res.send(response)
    } catch (error) {
        res.status(500).json({Error: "Error al eliminar la nota"})
    }
}
