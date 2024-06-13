import { Router } from 'express';
import { getAllBusinesses, getBusinessDetails, registerBusiness } from '../controllers/businessControllers';

const router = Router();

router.post('/register', registerBusiness);
router.get('/:id', getBusinessDetails);
router.get('/all', getAllBusinesses);


export default router;
