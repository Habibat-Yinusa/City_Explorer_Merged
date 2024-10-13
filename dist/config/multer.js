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
const multer_1 = __importDefault(require("multer"));
const cloudinary = require('cloudinary').v2;
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => __awaiter(void 0, void 0, void 0, function* () {
        let folder = 'general';
        if (req.body.imageType === 'profile') {
            folder = 'profile_pictures';
        }
        if (req.body.imageType === 'event') {
            folder = 'eventFlier';
        }
        if (req.body.imageType === 'sales') {
            folder = 'salesFlier';
        }
        if (req.body.imageType === 'product') {
            folder = 'product';
        }
        if (req.body.imageType === 'logo') {
            folder = 'logos';
        }
        return {
            folder: folder,
            format: ['jpg', 'png', 'jpeg'],
            public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
        };
    })
});
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
