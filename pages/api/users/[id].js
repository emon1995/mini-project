import nc from "next-connect";
import UserModel from "../../../models/UserModel";
import connectDb from '../../../utils/connectDb';

connectDb();

const handler = nc()
  .delete(async (req, res) => {
    try {
        await UserModel.findOneAndDelete({_id: req.query.id});
        res.send("User Deleted Success");
    } catch (error) {
        console.log(error);
    }
  })
  .put(async (req, res) => {
    try {
        const user = await UserModel.findOne({_id: req.query.id});
        user.name = req.body.name;
        user.email = req.body.email;
        user.phone = req.body.phone;
        user.save();
        res.send("User Updated!");
    } catch (error) {
        console.log(error);
    }
  })
  

export default handler;