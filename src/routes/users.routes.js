import { Router } from "express";
import passport from "passport";
import { createUser } from "../controllers/users.controller.js";

const userRouter = Router()

userRouter.post('/register', passport.authenticate('register'), createUser)

export default userRouter