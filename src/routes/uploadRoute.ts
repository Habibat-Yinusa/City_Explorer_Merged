import { Router } from 'express';
import { addProduct } from '../controllers/businessControllers';
import upload from '../config/multer';
import uploadImages from '../services/uploadImage';

const router = Router();
router.post('/image', upload.single('image'), uploadImages);

export default router;
