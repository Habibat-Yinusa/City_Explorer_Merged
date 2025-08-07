import cloudinary from '../config/cloudinary';
import fs from 'fs';
import { Request, Response } from 'express';

const uploadImages = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    let folder = 'general';
    switch (req.body.imageType?.toUpperCase()) {
      case 'PROFILE_PICTURE':
        folder = 'profile_pic';
        break;
      case 'EVENT':
        folder = 'event';
        break;
      case 'PROMO':
        folder = 'promo';
        break;
      case 'PRODUCT':
        folder = 'product';
        break;
      case 'LOGO':
        folder = 'logo';
        break;
    }

    // Upload using in-memory buffer
    const base64Image = file.buffer.toString('base64');
    const dataUri = `data:${file.mimetype};base64,${base64Image}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataUri, {
      folder,
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
    });

    return res.status(200).json({
      message: 'Image uploaded successfully',
      url: result.secure_url,
      public_id: result.public_id,
      folder,
    });
  } catch (error: any) {
    console.error('Upload failed:', error);
    return res.status(500).json({ message: 'Upload failed', error: error.message });
  }
};

export default uploadImages;
