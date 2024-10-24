"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { v2 as cloudinary } from 'cloudinary';
const dotenv_1 = __importDefault(require("dotenv"));
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
const cloudinary = require('cloudinary').v2;
dotenv_1.default.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
exports.default = cloudinary;
