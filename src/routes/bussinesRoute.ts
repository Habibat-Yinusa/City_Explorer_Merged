import { Router } from 'express';
import { addEventToBusiness, getAllBusinesses, getEvents, getAllEvents, getBusinessDetails, registerBusiness, addPromo, getPromo, getAllPromos, deletePromo } from '../controllers/businessControllers';
// import upload from '../config/multer';
// import cloudinary from '../config/cloudinary';

const router = Router();

router.post('/register', registerBusiness);
router.get('/:id', getBusinessDetails);
router.get('/', getAllBusinesses);
router.post('/createevent/:id', addEventToBusiness);
router.get('/event/:id', getEvents)
router.post('/promo/:id', addPromo)
router.get('/promo/:id', getPromo)
router.delete('/:businessId/promo/:promoId', deletePromo)
// router.post('/upload/single', upload.single('file'), async (req: Request, res: Response) => {
//     try {
//         const result = await cloudinary.uploader.upload(req.file.path, { folder: 'single_uploads' });
//         res.status(200).send({ url: result.secure_url, public_id: result.public_id });
//     } catch (error) {
//         res.status(500).send({ message: error.message });
//     }
//   });


export default router;
