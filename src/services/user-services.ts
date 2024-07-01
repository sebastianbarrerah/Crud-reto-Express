import { Request } from "express";
import userModel from "../models/user.model";

export const registerServices = async (data: Request) => {
    const response = await userModel.find({ data })
    if (response.length > 0) return null
    const newUser = await userModel.create(data)
    return newUser;
}

export const loginService = async (email: string, password: string) => {
    const res = await userModel.findOne({ "email": email, "password": password })
    if (res === null) return null
    await userModel.findOneAndUpdate({ email }, { state: true })
    return res;
}

export const updateState = (id:string) => {
    const response = userModel.findByIdAndUpdate(id,{ $set:{state: false}});
    return response;
}


