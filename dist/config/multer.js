"use strict";
// import multer from 'multer';
// const cloudinary = require('cloudinary').v2;
// // import { CloudinaryStorage } from 'multer-storage-cloudinary';
// // const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: async (req, file) => {
//     let folder = 'general'
//     if (req.body.imageType === 'profile') {
//       folder = 'profile_pictures';
//     } 
//     if (req.body.imageType === 'event') {
//       folder = 'eventFlier';
//     }
//     if (req.body.imageType === 'sales') {
//       folder = 'salesFlier';
//     }
//     if (req.body.imageType === 'product') {
//       folder = 'product';
//     }
//     if (req.body.imageType === 'logo') {
//       folder = 'logos';
//     }
//     return {
//       folder: folder,
//       format: ['jpg', 'png', 'jpeg'],
//       public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
//     };
//   }
// });
// const upload = multer({ storage });
// export default upload;
