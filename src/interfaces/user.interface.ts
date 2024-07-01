import { ObjectId } from "mongoose";

export interface UserEstructure{
    name: string;
    email: string;
    password: string;
    state: boolean;
    notas: [ObjectId];
};