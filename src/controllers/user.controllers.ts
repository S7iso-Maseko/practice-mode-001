import { Request, Response } from "express";
import { Types } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user-model";
import { IUser } from "../types/"

const getUserToken = (_id: string | Types.ObjectId) => {
    const authenticatedUserToken = jwt.sign({ _id }, "express", {
        expiresIn: "7d"
    });

    return authenticatedUserToken;
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.find({ email });

        if (userExists.length > 0)
            return res.status(409).send("User already exists!");

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            name: name, 
            email: email,
            password: hashedPassword
        });
        
        return res.status(201).send({ message: "User created successfully" });
        
    } catch (error) {
        console.log("error in CreateUser", error);
        throw error;
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password }: IUser = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser)
            return res.status(409).send({ message: "User doesn't exist" })

        const isPasswordIdentical = await bcrypt.compare(
            password,
            existingUser.password
        )

        if (isPasswordIdentical) {
            const token = getUserToken(existingUser._id);
            return res.send({
                token, 
                user: {
                    email: existingUser.email,
                    name: existingUser.name
                }
            })
        } else {
            return res.status(400).send({ message: "Wrong credentials" })
        }
    } catch (error) {
        console.log("error in loginUser", error);
        throw error;
    }
};