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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.deletePromo = exports.getAllPromos = exports.getPromo = exports.addPromo = exports.getAllEvents = exports.getEvents = exports.addEventToBusiness = exports.getAllBusinesses = exports.getBusinessDetails = exports.registerBusiness = void 0;
const businessPage_1 = __importDefault(require("../models/businessPage"));
const bcrypt_1 = require("bcrypt");
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const multer_1 = __importDefault(require("../config/multer"));
const errorHandler_1 = require("../middlewares/errorHandler");
// import BusinessModel  from '../models/businessPage';
const registerBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category, logo, items, location, openHours, phone, email, password, website, description } = req.body;
        const existingBusiness = yield businessPage_1.default.findOne({ email });
        if (!email) {
            throw new errorHandler_1.ValidationError("Please enter a valid email address");
        }
        if (existingBusiness) {
            throw new errorHandler_1.ValidationError("This email already exists");
        }
        if (!password) {
            throw new errorHandler_1.ValidationError("Please enter a password");
        }
        const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
        const newBusiness = new businessPage_1.default({
            name,
            category,
            logo,
            items,
            location,
            openHours,
            phone,
            email,
            password: hashedPassword,
            website,
            description
        });
        yield newBusiness.save();
        const _a = newBusiness.toObject(), { password: _ } = _a, newBusinessDetails = __rest(_a, ["password"]);
        res.status(201).send({ message: 'Business registered successfully', business: newBusinessDetails });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.registerBusiness = registerBusiness;
const getBusinessDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessId = req.params.id;
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }
        res.status(200).send(business);
    }
    catch (error) {
        if (error instanceof errorHandler_1.ValidationError) {
            return res.status(400).send({ message: error.message });
        }
        if (error instanceof errorHandler_1.ServerError) {
            return res.status(500).send({ message: error.message });
        }
        res.send({ message: 'Internal Server Error' });
    }
});
exports.getBusinessDetails = getBusinessDetails;
const getAllBusinesses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield businessPage_1.default.find();
        res.status(200).send(businesses);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getAllBusinesses = getAllBusinesses;
const addEventToBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const businessId = req.params.id;
        const { title, description, venue, date } = req.body;
        const file = (_b = req.file) === null || _b === void 0 ? void 0 : _b.path;
        if (!file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }
        const result = yield cloudinary_1.default.uploader.upload(file, {
            folder: 'events'
        });
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }
        const newEvent = { title, description, venue, date, image: result.secure_url };
        business.events.push(newEvent);
        yield business.save();
        res.status(201).send({ message: 'Event added successfully', event: newEvent });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.addEventToBusiness = addEventToBusiness;
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessId = req.params.id;
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }
        res.status(200).send(business.events);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getEvents = getEvents;
const getAllEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield businessPage_1.default.find();
        const allEvents = [];
        businesses.forEach(business => {
            allEvents.push(...business.events);
        });
        res.status(200).send(allEvents);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getAllEvents = getAllEvents;
const addPromo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessId = req.params.id;
        const { _id, name, description, timeValid } = req.body;
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }
        const newPromo = { _id, name, description, timeValid };
        business.promo.push(newPromo);
        yield business.save();
        res.status(201).send({ message: 'Event added successfully', event: newPromo });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.addPromo = addPromo;
const getPromo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessId = req.params.id;
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }
        res.status(200).send(business.promo);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getPromo = getPromo;
const getAllPromos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield businessPage_1.default.find();
        const allPromos = [];
        businesses.forEach(business => {
            allPromos.push(...business.promo);
        });
        res.status(200).send(allPromos);
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.getAllPromos = getAllPromos;
const deletePromo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { businessId, promoId } = req.params;
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }
        const promoIndex = business.promo.findIndex(promo => promo._id.toString() === promoId);
        if (promoIndex === -1) {
            return res.status(404).send({ message: 'Promo deal not found' });
        }
        business.promo.splice(promoIndex, 1);
        yield business.save();
        res.status(200).send({ message: 'Promo deal deleted successfully' });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.deletePromo = deletePromo;
// const addProduct = async (req: Request, res: Response) => {
//     upload.single('file')(req, res, async (err) => {
//         if (err) {
//           return res.status(400).json({ message: 'Error uploading file', error: err.message });
//         }
//   try {
//     const { businessId, name, description, price } = req.body;
//     const file = req.file;
//     if (!file) {
//       return res.status(400).json({ message: 'No image uploaded' });
//     }
//     const result = await cloudinary.uploader.upload(file, {
//       folder: 'products'
//     });
//     const newProduct = {
//       name,
//       description,
//       price,
//       image: result.secure_url
//     };
//     const updatedBusinessPage = await BusinessModel.findByIdAndUpdate(
//         businessId,
//         { $push: { items: newProduct } },
//         { new: true }
//       );
//       if (!updatedBusinessPage) {
//         return res.status(404).json({ message: 'Business not found' });
//       }
//       res.status(200).json({ message: 'Product added successfully', product: newProduct });
//     } catch (error: any) {
//       res.status(500).json({ message: error.message });
//     }
// })
// };
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    multer_1.default.single('file')(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        if (err) {
            return res.status(400).json({ message: 'Error uploading file', error: err.message });
        }
        try {
            const { businessId, name, description, price } = req.body;
            const filePath = (_c = req.file) === null || _c === void 0 ? void 0 : _c.path;
            if (!filePath) {
                return res.status(400).json({ message: 'No image uploaded' });
            }
            const result = yield cloudinary_1.default.uploader.upload(filePath, {
                folder: 'products'
            });
            const newProduct = {
                name,
                description,
                price,
                image: result.secure_ur
            };
            const updatedBusinessPage = yield businessPage_1.default.findByIdAndUpdate(businessId, { $push: { items: newProduct } }, { new: true });
            if (!updatedBusinessPage) {
                return res.status(404).json({ message: 'Business not found' });
            }
            res.status(200).json({ message: 'Product added successfully', product: newProduct });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }));
});
exports.addProduct = addProduct;
exports.default = addProduct;
