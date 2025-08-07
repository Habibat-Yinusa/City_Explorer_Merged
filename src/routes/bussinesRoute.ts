import { Router } from 'express';
import * as businessController from '../controllers/businessControllers';
import upload from '../config/multer';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', upload.single('image'), businessController.registerBusiness);
router.get('/activate/:id', businessController.activateBusiness);
router.get('/', authenticate, businessController.getBusinessDetails);
router.get('/all', authenticate, businessController.getAllBusinesses);
router.patch('/update', authenticate, upload.single('image'), businessController.updateBusinessDetails);
router.delete('/delete', authenticate, businessController.deleteBusiness);

router.post('/event', authenticate, upload.single('image'), businessController.addEventToBusiness);
router.get('/events', authenticate, businessController.getEvents);
router.patch('/event', authenticate, upload.single('image'), businessController.updateEvent);
router.delete('/event', authenticate, businessController.deleteEvent);

router.post('/promo', authenticate, upload.single('image'), businessController.addPromo);
router.get('/promo', authenticate, businessController.getPromos);
router.patch('/promo', authenticate, upload.single('image'), businessController.updatePromo);
router.delete('/promo', authenticate, businessController.deletePromo);

router.post('/:businessId/product', authenticate, upload.single('image'), businessController.addProduct);
router.post('/:businessId/upload-flier', authenticate, upload.single('image'), businessController.uploadBusinessFlier);

export default router;
