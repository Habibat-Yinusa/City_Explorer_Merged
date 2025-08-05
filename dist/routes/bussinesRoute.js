"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessController = __importStar(require("../controllers/businessControllers"));
const multer_1 = __importDefault(require("../config/multer"));
const router = (0, express_1.Router)();
router.post('/register', multer_1.default.single('image'), businessController.registerBusiness);
router.get('/activate/:id', businessController.activateBusiness);
router.get('/', businessController.getBusinessDetails);
router.get('/', businessController.getAllBusinesses);
router.post('/event', businessController.addEventToBusiness);
router.get('/events', businessController.getEvents);
// router.get('/events', businessController.getAllEvents);
router.post('/promo', businessController.addPromo);
router.get('/promo', businessController.getPromos);
// router.get('/promos', businessController.getAllPromos);
router.delete('/promo', businessController.deletePromo);
router.post('/:businessId/product', multer_1.default.single('file'), businessController.addProduct);
exports.default = router;
