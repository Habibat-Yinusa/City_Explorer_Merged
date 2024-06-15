import { Router } from 'express';
import { addEventToBusiness, getAllBusinesses, getEvents, getAllEvents, getBusinessDetails, registerBusiness } from '../controllers/businessControllers';

const router = Router();

router.get('/events', getAllEvents)
router.post('/register', registerBusiness);
router.get('/:id', getBusinessDetails);
router.get('/', getAllBusinesses);
router.post('/createevent/:id', addEventToBusiness);
router.get('/event/:id', getEvents)



export default router;
