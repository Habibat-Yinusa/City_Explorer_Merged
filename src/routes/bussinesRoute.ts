import { Router } from 'express';
import { getBusinessDetails, registerBusiness } from '../controllers/businessControllers';

const router = Router();

router.post('/register', registerBusiness);
router.get('/:id', getBusinessDetails);


export default router;
