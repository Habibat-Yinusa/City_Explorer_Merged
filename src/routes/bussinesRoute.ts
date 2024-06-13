import { Router } from 'express';
import { registerBusiness } from '../controllers/businessControllers';

const router = Router();

router.post('/register', registerBusiness);

export default router;
