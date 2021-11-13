import express from 'express';
import expressAsyncHandler from 'express-async-handler'
import data from '../data.js';
import bcrypt from 'bcryptjs'
import Users from '../models/userModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    await Users.remove({});
    const createdUsers = await Users.insertMany(data.users);
    res.send({ createdUsers });
}));

userRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await Users.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Email ou Senha Inválida' })
    })
);

export default userRouter;
