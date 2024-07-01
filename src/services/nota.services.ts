import { EstructuraNota } from "../interfaces/nota.interfaces";
import { Request } from "express";
import notaModel from "../models/notas.model";
import userModel from "../models/user.model";

export const getNotasService = async (userId: string) => {
    const nota = await userModel.findById(userId).populate('notas');
    return nota?.notas || [];
}

export const addNotaService = async (id:string, data:Request['body']) => {
    const { title, description, vencimiento } = data;
    const fecha = new Date();
    const diasDespues = fecha.setDate( fecha.getDate() + vencimiento)
    const response = await notaModel.create({
        userId: id, title, description, vencimiento: diasDespues
    });
    await userModel.findByIdAndUpdate(id, {
        $push: { notas: response._id }}) 
    return response
}

export const updateNotaService = async (id:string , actualizacion:EstructuraNota) => {
    const response = await notaModel.findOneAndUpdate({ _id: id }, actualizacion, { new: true});
    return response
}

export const deleteNotaService = async (id:string) => {
    const response = await notaModel.findOneAndDelete({ _id: id });
    return response
}












 