"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messages = exports.loginUser = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_2 = __importDefault(require("bcrypt"));
const businessPage_1 = __importDefault(require("../models/businessPage"));
// import CustomError from '../utils/customError';
// import { cloudinary } from "../config/cloudinary.js"
let messages = [];
exports.messages = messages;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            throw new Error("Please fill in all fields");
        }
        const existingUser = yield user_1.default.findOne({ email });
        if (existingUser) {
            throw new Error("This email already exists");
        }
        const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
        const newUser = new user_1.default({
            username, email, password: hashedPassword
        });
        const savedUser = yield newUser.save();
        res.status(201).send({ message: "Account created successfully!" });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        let user = yield user_1.default.findOne({ email });
        let businessDetails;
        const userDetails = {
            id: user === null || user === void 0 ? void 0 : user.id,
            role: user === null || user === void 0 ? void 0 : user.role,
            username: user === null || user === void 0 ? void 0 : user.username,
            email: user === null || user === void 0 ? void 0 : user.email
        };
        if (!user) {
            user = yield businessPage_1.default.findOne({ email });
            businessDetails = user === null || user === void 0 ? void 0 : user.toObject();
            delete businessDetails.password;
        }
        const details = businessDetails ? businessDetails : userDetails;
        if (!user) {
            throw new Error("User not found");
        }
        const isMatch = yield bcrypt_2.default.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Incorrect password!");
        }
        const token = jsonwebtoken_1.default.sign({
            userId: user._id
        }, process.env.JWT_SECRET, { expiresIn: "90d" });
        res.status(200).json({
            token,
            details
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
exports.loginUser = loginUser;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findOne({ email: req.body.email });
        if (!user) {
            throw new Error("User doesn't exist, check email again");
        }
        // GENERATE A RANDOM RESET TOKEN
        const resetToken = user.createResetPasswordToken();
        yield user.save();
        console.log(resetToken);
        res.status(200).json({
            success: true,
            message: "Token sent to email"
        });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
});
// , forgotPassword 
