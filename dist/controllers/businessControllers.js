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
exports.deletePromo = exports.getAllPromos = exports.getPromo = exports.addPromo = exports.getAllEvents = exports.getEvents = exports.addEventToBusiness = exports.getAllBusinesses = exports.getBusinessDetails = exports.registerBusiness = void 0;
const businessPage_1 = __importDefault(require("../models/businessPage"));
const bcrypt_1 = require("bcrypt");
// import uploadImages from "./images";
// const cloudinary = require("cloudinary").v2;
// import BusinessModel  from '../models/businessPage';
const registerBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, category, items, location, openHours, phone, email, password, website, description, } = req.body;
        const existingBusiness = yield businessPage_1.default.findOne({ email });
        console.log("email", req.body.email);
        console.log("file", req.file);
        console.log("Request Body:", req.body);
        console.log("Uploaded Files:", (_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
        if (!email) {
            throw new Error("Please enter a valid email address");
        }
        if (existingBusiness) {
            throw new Error("This email already exists");
        }
        if (!password) {
            throw new Error("Please enter a password");
        }
        const hashedPassword = yield (0, bcrypt_1.hash)(password, 10);
        // let uploadResults;
        // const logoFile = req.files;
        // let logoUrl;
        // if (logoFile?.length !== 0) {
        //   uploadResults = await uploadImages(req, res);
        //   logoUrl = uploadResults.length > 0 ? uploadResults[0].url : "";
        // }
        const newBusiness = new businessPage_1.default({
            name,
            category,
            // logo: logoUrl,
            items,
            location,
            openHours,
            phone,
            email,
            password: hashedPassword,
            website,
            description,
        });
        yield newBusiness.save();
        const _b = newBusiness.toObject(), { password: _ } = _b, newBusinessDetails = __rest(_b, ["password"]);
        res
            .status(201)
            .send({
            message: "Business registered successfully",
            business: newBusinessDetails,
        });
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
    }
});
exports.registerBusiness = registerBusiness;
const getBusinessDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessId = req.params.id;
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: "Business not found" });
        }
        res.status(200).send(business);
    }
    catch (error) {
        return res.status(500).send({ message: error.message });
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
    var _c;
    try {
        const businessId = req.params.id;
        const { title, description, venue, date } = req.body;
        const file = (_c = req.file) === null || _c === void 0 ? void 0 : _c.path;
        if (!file) {
            return res.status(400).json({ message: "No image uploaded" });
        }
        // const result = await cloudinary.uploader.upload(file, {
        //   folder: "events",
        // });
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: "Business not found" });
        }
        const newEvent = {
            title,
            description,
            venue,
            date,
            // image: result.secure_url,
        };
        business.events.push(newEvent);
        yield business.save();
        res
            .status(201)
            .send({ message: "Event added successfully", event: newEvent });
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
            return res.status(404).send({ message: "Business not found" });
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
        businesses.forEach((business) => {
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
            return res.status(404).send({ message: "Business not found" });
        }
        const newPromo = { _id, name, description, timeValid };
        business.promo.push(newPromo);
        yield business.save();
        res
            .status(201)
            .send({ message: "Event added successfully", event: newPromo });
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
            return res.status(404).send({ message: "Business not found" });
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
        businesses.forEach((business) => {
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
            return res.status(404).send({ message: "Business not found" });
        }
        const promoIndex = business.promo.findIndex((promo) => promo._id.toString() === promoId);
        if (promoIndex === -1) {
            return res.status(404).send({ message: "Promo deal not found" });
        }
        business.promo.splice(promoIndex, 1);
        yield business.save();
        res.status(200).send({ message: "Promo deal deleted successfully" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.deletePromo = deletePromo;
