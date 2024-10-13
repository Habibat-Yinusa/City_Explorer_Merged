"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessControllers_1 = require("../controllers/businessControllers");
const router = (0, express_1.Router)();
router.post('/register', businessControllers_1.registerBusiness);
router.get('/:id', businessControllers_1.getBusinessDetails);
router.get('/', businessControllers_1.getAllBusinesses);
router.post('/createevent/:id', businessControllers_1.addEventToBusiness);
router.get('/event/:id', businessControllers_1.getEvents);
router.post('/promo/:id', businessControllers_1.addPromo);
router.get('/promo/:id', businessControllers_1.getPromo);
router.delete('/:businessId/promo/:promoId', businessControllers_1.deletePromo);
// router.post('/upload/single', upload.single('file'), async (req: Request, res: Response) => {
//     try {
//         const result = await cloudinary.uploader.upload(req.file.path, { folder: 'single_uploads' });
//         res.status(200).send({ url: result.secure_url, public_id: result.public_id });
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
//   });
exports.default = router;
