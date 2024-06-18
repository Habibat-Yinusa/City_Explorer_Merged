// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import cloudinary from '../config/cloudinary';
// import Business from '../models/businessPage';
// import upload from '../config/multer';
// import Item from "../models/businessPage";


// const router = express.Router();
// const upload = multer({ dest: path.join(__dirname, 'uploads/') });

// router.post('/add-product', upload.single('image'), async (req: Request, res: Response) => {
//   try {
//     const { businessId, name, description, price } = req.body;
//     const file = req.file?.path;

//     if (!file) {
//       return res.status(400).json({ message: 'No image uploaded' });
//     }

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(file, {
//       folder: 'products'
//     });

//     // Create a new product
//     const product = new Item({
//       name,
//       description,
//       price,
//       image: result.secure_url
//     });

//     // Save product to the database
//     const savedProduct = await product.save();

//     // Find the business and add the product to its items
//     const business = await Business.findById(businessId);
//     if (!business) {
//       return res.status(404).json({ message: 'Business not found' });
//     }

//     business.items.push(savedProduct._id as mongoose.Types.ObjectId);
//     await business.save();

//     res.status(200).json({ message: 'Product added successfully', product: savedProduct });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
