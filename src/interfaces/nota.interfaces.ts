import { ObjectId } from "mongoose";

export interface EstructuraNota {
    userId: ObjectId;
    title: string;
    description: string;
    completed: boolean;
    vencimiento: Date;
};