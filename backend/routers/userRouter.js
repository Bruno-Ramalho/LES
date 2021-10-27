import express from 'express';
import expressAsyncHandler from 'express-async-handler'
import data from '../data.js';
import Users from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Users.remove({});
    const createdUsers = await Users.insertMany(data.users);
    res.send({createdUsers});
}));

export default userRouter;
