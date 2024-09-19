import { Request, Response } from 'express';
import BusinessModel, { BusinessEvent, PromoDeal, Items } from '../models/businessPage';
import { Types } from 'mongoose';
import { hash, compare } from "bcrypt"

import cloudinary from '../config/cloudinary';
import upload from '../config/multer';

// import BusinessModel  from '../models/businessPage';

 const registerBusiness = async (req: Request, res: Response) => {
    try {
        const { name, category, logo, items, location, openHours, phone, email, password, website, description } = req.body;

        const existingBusiness = await BusinessModel.findOne({ email });

        if (!email) {
            throw new Error("Please enter a valid email address");
        }

        if (existingBusiness) {
            throw new Error("This email already exists");
        }

        if (!password) {
            throw new Error("Please enter a password");
        }

        const hashedPassword = await hash(password, 10);

        const newBusiness = new BusinessModel({
            name,
            category,
            logo,
            items,
            location,
            openHours,
            phone,
            email,
            password: hashedPassword,
            website,
            description
        });

        await newBusiness.save();

        res.status(201).send({ message: 'Business registered successfully', business: newBusiness });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

 const getBusinessDetails = async (req: Request, res: Response) => {
    try {
        const businessId = req.params.id;

        const business = await BusinessModel.findById(businessId);

        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }

        res.status(200).send(business);
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

//
 const getAllBusinesses = async (req: Request, res: Response) => {
    try {
        const businesses = await BusinessModel.find();

        res.status(200).send(businesses);
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

// Add an event to a business

 const addEventToBusiness = async (req: Request, res: Response) => {
    try {
        const businessId = req.params.id;
        const { title, description, venue, date } = req.body;
        const file = req.file?.path;

        if (!file) {
        return res.status(400).json({ message: 'No image uploaded' });
        }

        const result = await cloudinary.uploader.upload(file, {
        folder: 'events'
        });
 
        const business = await BusinessModel.findById(businessId);

        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }

        const newEvent = { title, description, venue, date, image: result.secure_url };

        business.events.push(newEvent);

        await business.save();

        res.status(201).send({ message: 'Event added successfully', event: newEvent });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

//get an event
const getEvents = async (req: Request, res: Response) => {
    try {
        const businessId = req.params.id;
        const business = await BusinessModel.findById(businessId);

        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }

        res.status(200).send(business.events);
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

//get all events
const getAllEvents = async (req: Request, res: Response) => {
    try {
        const businesses = await BusinessModel.find();
        const allEvents: BusinessEvent[] = [];

        businesses.forEach(business => {
            allEvents.push(...business.events);
        });

        res.status(200).send(allEvents);
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

//add business promo
const addPromo = async (req: Request, res: Response) => {
    try {
        const businessId = req.params.id;
        const { _id, name, description, timeValid } = req.body;

        
        const business = await BusinessModel.findById(businessId);

        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }

        const newPromo = { _id, name, description, timeValid };

        business.promo.push(newPromo);

        await business.save();

        res.status(201).send({ message: 'Event added successfully', event: newPromo});
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

//get business promos
const getPromo = async (req: Request, res: Response) => {
    try {
        const businessId = req.params.id;
        const business = await BusinessModel.findById(businessId);

        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }

        res.status(200).send(business.promo);
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

const getAllPromos = async (req: Request, res: Response) => {
    try {
        const businesses = await BusinessModel.find();
        const allPromos: PromoDeal[] = [];

        businesses.forEach(business => {
            allPromos.push(...business.promo);
        });

        res.status(200).send(allPromos);
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

const deletePromo = async (req: Request, res: Response) => {
    try {
        const { businessId, promoId } = req.params;

        const business = await BusinessModel.findById(businessId);

        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }

        const promoIndex = business.promo.findIndex(promo => promo._id.toString() === promoId);

        if (promoIndex === -1) {
            return res.status(404).send({ message: 'Promo deal not found' });
        }

        business.promo.splice(promoIndex, 1);
        await business.save();

        res.status(200).send({ message: 'Promo deal deleted successfully' });
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};



// const addProduct = async (req: Request, res: Response) => {
//     upload.single('file')(req, res, async (err) => {
//         if (err) {
//           return res.status(400).json({ message: 'Error uploading file', error: err.message });
//         }

//   try {
//     const { businessId, name, description, price } = req.body;
//     const file = req.file;
   

//     if (!file) {
//       return res.status(400).json({ message: 'No image uploaded' });
//     }

//     const result = await cloudinary.uploader.upload(file, {
//       folder: 'products'
//     });

//     const newProduct = {
//       name,
//       description,
//       price,
//       image: result.secure_url
//     };

//     const updatedBusinessPage = await BusinessModel.findByIdAndUpdate(
//         businessId,
//         { $push: { items: newProduct } },
//         { new: true }
//       );
  
//       if (!updatedBusinessPage) {
//         return res.status(404).json({ message: 'Business not found' });
//       }
  
//       res.status(200).json({ message: 'Product added successfully', product: newProduct });
//     } catch (error: any) {
//       res.status(500).json({ message: error.message });
//     }

// })
// };

// import { Request, Response } from 'express';
// import multer from './multer'; // Your multer configuration file
// import cloudinary from './cloudinary'; // Your Cloudinary configuration file
// import BusinessModel from './models/BusinessModel'; // Adjust import based on your project structure

// Route handler
const addProduct = async (req: Request, res: Response) => {
  // Use multer middleware to handle file upload
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Error uploading file', error: err.message });
    }

    try {
      const { businessId, name, description, price } = req.body;
      const filePath = req.file?.path; // Ensure this is a string path to the file

      if (!filePath) {
        return res.status(400).json({ message: 'No image uploaded' });
      }

      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'products'
      });

      const newProduct = {
        name,
        description,
        price,
        image: result.secure_url // URL of the uploaded image
      };

      // Update the business page with the new product
      const updatedBusinessPage = await BusinessModel.findByIdAndUpdate(
        businessId,
        { $push: { items: newProduct } },
        { new: true }
      );

      if (!updatedBusinessPage) {
        return res.status(404).json({ message: 'Business not found' });
      }

      res.status(200).json({ message: 'Product added successfully', product: newProduct });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
};

export default addProduct;


// export default { addProduct };

export { registerBusiness, getBusinessDetails, getAllBusinesses, addEventToBusiness, getEvents, getAllEvents, addPromo, getPromo, getAllPromos, deletePromo, addProduct }