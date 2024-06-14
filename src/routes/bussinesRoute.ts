import { Router } from 'express';
import { addEventToBusiness, getAllBusinesses, getAllEvents, getBusinessDetails, registerBusiness } from '../controllers/businessControllers';

const router = Router();

router.post('/register', registerBusiness);
router.get('/:id', getBusinessDetails);
router.get('/', getAllBusinesses);
router.post('/event/create/:id', addEventToBusiness);
router.get('/event/:id', getAllEvents)


export default router;
