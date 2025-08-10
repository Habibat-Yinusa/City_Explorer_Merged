import { Router } from 'express';
import { addProduct } from '../controllers/businessControllers';
import upload from '../config/multer';
import uploadImages from '../services/uploadImage';
import { authenticate } from '../middlewares/authMiddleware';

/**
 * @swagger
 * tags:
 *   name: Image Uploads
 *   description: Endpoints for uploading images
 */

/**
 * @swagger
 * /upload/image:
 *   post:
 *     summary: Upload any type of image (profile picture, event, promo, product, logo, general)
 *     tags: [Image Uploads]
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               imageType:
 *                 type: string
 *                 enum: [PROFILE_PICTURE, EVENT, PROMO, PRODUCT, LOGO, GENERAL]
 *                 description: Type of image to determine upload folder
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *       400:
 *         description: No image file provided
 *       500:
 *         description: Server error
 */

const router = Router();
router.post('/image', authenticate, upload.single('image'), uploadImages);

export default router;
