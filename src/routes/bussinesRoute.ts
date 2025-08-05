import { Router } from 'express';
import * as businessController from '../controllers/businessControllers';
import upload from '../config/multer';

const router = Router();

router.post('/register', upload.single('image'), businessController.registerBusiness);
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

router.post('/:businessId/product', upload.single('file'), businessController.addProduct);

export default router;
