import { Request, Response } from "express";
import BusinessModel, {
  BusinessEvent,
  PromoDeal,
  Items,
} from "../models/businessPage";
import { Types } from "mongoose";
import { hash, compare } from "bcrypt";
// import cloudinary from '../config/cloudinary';
import upload from "../config/multer";
import { ValidationError, ServerError } from "../middlewares/errorHandler";
import uploadImages from "./images";
const cloudinary = require("cloudinary").v2;

// import BusinessModel  from '../models/businessPage';

const registerBusiness = async (req: Request, res: Response) => {
  try {
    const {
      name,
      category,
      items,
      location,
      openHours,
      phone,
      email,
      password,
      website,
      description,
    } = req.body;

    const existingBusiness = await BusinessModel.findOne({ email });

    console.log("email", req.body.email);
    console.log("file", req.file);
    console.log("Request Body:", req.body);
    console.log("Uploaded Files:", req.file?.path);

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

    let uploadResults;
    const logoFile = req.files;
    let logoUrl;
    if (logoFile?.length !== 0) {
      uploadResults = await uploadImages(req, res);
      logoUrl = uploadResults.length > 0 ? uploadResults[0].url : "";
    }

    const newBusiness = new BusinessModel({
      name,
      category,
      logo: logoUrl,
      items,
      location,
      openHours,
      phone,
      email,
      password: hashedPassword,
      website,
      description,
    });

    await newBusiness.save();
    const { password: _, ...newBusinessDetails } = newBusiness.toObject();

    res
      .status(201)
      .send({
        message: "Business registered successfully",
        business: newBusinessDetails,
      });
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
};

const getBusinessDetails = async (req: Request, res: Response) => {
  try {
    const businessId = req.params.id;

    const business = await BusinessModel.findById(businessId);

    if (!business) {
      return res.status(404).send({ message: "Business not found" });
    }

    res.status(200).send(business);
  } catch (error: any) {
    return res.status(500).send({ message: error.message });
  }
};
const getAllBusinesses = async (req: Request, res: Response) => {
  try {
    const businesses = await BusinessModel.find();

    res.status(200).send(businesses);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

const addEventToBusiness = async (req: Request, res: Response) => {
  try {
    const businessId = req.params.id;
    const { title, description, venue, date } = req.body;
    const file = req.file?.path;

    if (!file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const result = await cloudinary.uploader.upload(file, {
      folder: "events",
    });

    const business = await BusinessModel.findById(businessId);

    if (!business) {
      return res.status(404).send({ message: "Business not found" });
    }

    const newEvent = {
      title,
      description,
      venue,
      date,
      image: result.secure_url,
    };

    business.events.push(newEvent);

    await business.save();

    res
      .status(201)
      .send({ message: "Event added successfully", event: newEvent });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

const getEvents = async (req: Request, res: Response) => {
  try {
    const businessId = req.params.id;
    const business = await BusinessModel.findById(businessId);

    if (!business) {
      return res.status(404).send({ message: "Business not found" });
    }

    res.status(200).send(business.events);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const businesses = await BusinessModel.find();
    const allEvents: BusinessEvent[] = [];

    businesses.forEach((business) => {
      allEvents.push(...business.events);
    });

    res.status(200).send(allEvents);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

const addPromo = async (req: Request, res: Response) => {
  try {
    const businessId = req.params.id;
    const { _id, name, description, timeValid } = req.body;

    const business = await BusinessModel.findById(businessId);

    if (!business) {
      return res.status(404).send({ message: "Business not found" });
    }

    const newPromo = { _id, name, description, timeValid };

    business.promo.push(newPromo);

    await business.save();

    res
      .status(201)
      .send({ message: "Event added successfully", event: newPromo });
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};

const getPromo = async (req: Request, res: Response) => {
  try {
    const businessId = req.params.id;
    const business = await BusinessModel.findById(businessId);

    if (!business) {
      return res.status(404).send({ message: "Business not found" });
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

    businesses.forEach((business) => {
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
      return res.status(404).send({ message: "Business not found" });
    }

    const promoIndex = business.promo.findIndex(
      (promo) => promo._id.toString() === promoId
    );

    if (promoIndex === -1) {
      return res.status(404).send({ message: "Promo deal not found" });
    }

    business.promo.splice(promoIndex, 1);
    await business.save();

    res.status(200).send({ message: "Promo deal deleted successfully" });
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

const addProduct = async (req: Request, res: Response) => {
  upload.single("file")(req, res, async (err) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Error uploading file", error: err.message });
    }

    try {
      const { businessId, name, description, price } = req.body;
      const filePath = req.file?.path;

      if (!filePath) {
        return res.status(400).json({ message: "No image uploaded" });
      }

      const result = await cloudinary.uploader.upload(filePath, {
        folder: "products",
      });

      const newProduct = {
        name,
        description,
        price,
        image: result.secure_ur,
      };

      const updatedBusinessPage = await BusinessModel.findByIdAndUpdate(
        businessId,
        { $push: { items: newProduct } },
        { new: true }
      );

      if (!updatedBusinessPage) {
        return res.status(404).json({ message: "Business not found" });
      }

      res
        .status(200)
        .json({ message: "Product added successfully", product: newProduct });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
};

export default addProduct;

// export default { addProduct };

export {
  registerBusiness,
  getBusinessDetails,
  getAllBusinesses,
  addEventToBusiness,
  getEvents,
  getAllEvents,
  addPromo,
  getPromo,
  getAllPromos,
  deletePromo,
  addProduct,
};
