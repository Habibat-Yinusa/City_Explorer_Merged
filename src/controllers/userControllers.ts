import User from "../models/user";
import Business from "../models/businessPage";
import { hash, compare } from "bcrypt"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import BusinessModel from "../models/businessPage";

// import CustomError from '../utils/customError';
// import { cloudinary } from "../config/cloudinary.js"

let messages: string[] = [];


//Signup
const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            throw new Error("Please fill in all fields");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error("This email already exists");
        }

        const hashedPassword = await hash(password, 10);

        const newUser = new User({
            username, email, password: hashedPassword
        });

        const savedUser = await newUser.save();

        res.status(201).send({ message: "Account created successfully!" });

    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
};

// Login
const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        let businessDetails 
        
        const userDetails = { 
            id: user?.id,
            role: user?.role, 
            username: user?.username, 
            email: user?.email
        }

        if (!user) {
            user = await BusinessModel.findOne({ email });
            businessDetails = user?.toObject();
            delete businessDetails.password;
          }

        const details = businessDetails ? businessDetails : userDetails;

        if (!user) {
            throw new Error("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("Incorrect password!");
        }

        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET!, { expiresIn: "90d" });

        res.status(200).json({
            token, 
            details
        });
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
};

// forgotPassword
const forgotPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findOne({ email: req.body.email });
    
        if (!user) {
            throw new Error("User doesn't exist, check email again");
        }
    
        // GENERATE A RANDOM RESET TOKEN
        const resetToken: string = user.createResetPasswordToken();
        await user.save();
        console.log(resetToken);
    
        res.status(200).json({
            success: true,
            message: "Token sent to email"
        });
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
    
};

// exports.resetPassword = (req, res, next) => {

// }


export { createUser, loginUser, messages }
// , forgotPassword 
