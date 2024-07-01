import { connect } from "mongoose";
const db = async ():Promise<void> => {
    await connect(`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD}@cluster0.jjum9vk.mongodb.net/${process.env.BD}`);
}
export default db;