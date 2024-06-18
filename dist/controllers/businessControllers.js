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
exports.deletePromo = exports.getAllPromos = exports.getPromo = exports.addPromo = exports.getAllEvents = exports.getEvents = exports.addEventToBusiness = exports.getAllBusinesses = exports.getBusinessDetails = exports.registerBusiness = void 0;
const businessPage_1 = __importDefault(require("../models/businessPage"));
const registerBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, category, logo, items, location, openHours, phone, email, website } = req.body;
        const newBusiness = new businessPage_1.default({
            name,
            category,
            logo,
            items,
            location,
            openHours,
            phone,
            email,
            website
        });
        yield newBusiness.save();
        res.status(201).send({ message: 'Business registered successfully', business: newBusiness });
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
        res.status(500).send({ message: error.message });
    }
});
exports.getBusinessDetails = getBusinessDetails;
//
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
// Add an event to a business
const addEventToBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessId = req.params.id;
        const { title, description, venue, date } = req.body;
        const business = yield businessPage_1.default.findById(businessId);
        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }
        const newEvent = { title, description, venue, date };
        business.events.push(newEvent);
        yield business.save();
        res.status(201).send({ message: 'Event added successfully', event: newEvent });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
exports.addEventToBusiness = addEventToBusiness;
//get an event
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
//get all events
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
//add business promo
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
//get business promos
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
