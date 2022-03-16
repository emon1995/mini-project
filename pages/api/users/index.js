import nc from "next-connect";
import UserModel from "../../../models/UserModel";
import connectDb from '../../../utils/connectDb';

connectDb();

const handler = nc()
  .get(async (req, res) => {
    try{
        const users = await UserModel.find({});
        res.send(users);
    }catch(error){
        console.log(error);
    }
  })
  .post(async (req, res) => {
    const {name, email, phone} = req.body;
    const newUser = new UserModel({name, email, phone});
    try {
        await newUser.save();
        res.send('New User Created');
    } catch (error) {
        console.log(error);
    }
  })
  

export default handler;