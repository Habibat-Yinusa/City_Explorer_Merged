import { Router } from 'express';
import { addEventToBusiness, getAllBusinesses, getEvents, getAllEvents, getBusinessDetails, registerBusiness, addPromo, getPromo, getAllPromos } from '../controllers/businessControllers';

const router = Router();

router.get('/events', getAllEvents)
router.post('/register', registerBusiness);
router.get('/:id', getBusinessDetails);
router.get('/', getAllBusinesses);
router.post('/createevent/:id', addEventToBusiness);
router.get('/event/:id', getEvents)
router.post('/promo/:id', addPromo)
router.get('/promo/:id', getPromo)
router.get('/promo/', getAllPromos)


export default router;
