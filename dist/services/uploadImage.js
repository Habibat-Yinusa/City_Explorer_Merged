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
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const uploadImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ message: 'No image file provided' });
        }
        let folder = 'general';
        switch ((_a = req.body.imageType) === null || _a === void 0 ? void 0 : _a.toUpperCase()) {
            case 'PROFILE_PICTURE':
                folder = 'profile_pic';
                break;
            case 'EVENT':
                folder = 'event';
                break;
            case 'PROMO':
                folder = 'promo';
                break;
            case 'PRODUCT':
                folder = 'product';
                break;
            case 'LOGO':
                folder = 'logo';
                break;
        }
        // Upload using in-memory buffer
        const base64Image = file.buffer.toString('base64');
        const dataUri = `data:${file.mimetype};base64,${base64Image}`;
        // Upload to Cloudinary
        const result = yield cloudinary_1.default.uploader.upload(dataUri, {
            folder,
            public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
        });
        return res.status(200).json({
            message: 'Image uploaded successfully',
            url: result.secure_url,
            public_id: result.public_id,
            folder,
        });
    }
    catch (error) {
        console.error('Upload failed:', error);
        return res.status(500).json({ message: 'Upload failed', error: error.message });
    }
});
exports.default = uploadImages;
