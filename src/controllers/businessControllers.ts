import { Request, Response } from "express";
import { PrismaClient } from '../generated/prisma';
import { hash } from "bcrypt";
import cloudinary from "../config/cloudinary";
import type { Request as ExpressRequest } from "express";
import uploadImages from "../services/uploadImage";
import { sendEmail } from "../helpers/helper";

type MulterFile = Express.Multer.File;
interface MulterRequest extends ExpressRequest {
  file?: MulterFile;
}

const prisma = new PrismaClient();
const API_BASE_URL = process.env.API_BASE_URL
const CLIENT_BASE_URL = process.env.CLIENT_BASE_URL


const registerBusiness = async (req: Request, res: Response) => {
  try {
    const {
      name,
      category,
      items,
      location,
      longitude,
      latitude,
      openHours,
      phone,
      email,
      password,
      website,
      description,
      role = "BUSINESS",
    } = req.body;

    if (!email || !password) {
      throw new Error("Please enter all required fields");
    }

    const existing = await prisma.business.findUnique({
      where: { email_role: { email, role } },
    });

    if (existing) throw new Error("This email already exists");

    const hashedPassword = await hash(password, 10);

    let logoUrl: string | undefined;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "logo",
      });
      logoUrl = result.secure_url;
    }

    const newBusiness = await prisma.business.create({
      data: {
        name,
        category,
        location,
        longitude,
        latitude,
        phone,
        email,
        website,
        description,
        role,
        logo: logoUrl,
        openHours: openHours || "9 AM - 5 PM", // Default open hours
        password: {
          create: {
            hashedPassword,
          },
        },
      },
    });

   const activationLink = `${API_BASE_URL}/business/activate/${newBusiness.businessId}`;

    await sendEmail(
      email,
      "Activate Your City Explorer Account",
      '',
      `<h1>Hello ${name},</h1>
        <h4>Welcome to City Explorer!</h4>
        <p>
        Discover, promote, and grow your business with City Explorer. We're excited to have you on board and can't wait to see your business thrive!
        </p>
      <p>Click the button below to activate your account:</p>
      <a href="${activationLink}" style="padding: 10px 20px; background-color: #5b8df3ff; color: white; text-decoration: none;">Activate Account</a>
      <p>If you did not create this account, please ignore this email.</p>`
    );

    res.status(201).json({
      message: "Business registered successfully. Please check your email to activate your account.",
      business: { ...newBusiness, password: undefined },
    });
  } catch (error: any) {
    res.status(500).json({ error: JSON.stringify(error) });
  }
};

const activateBusiness = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const business = await prisma.business.update({
      where: { businessId: id },
      data: { status: 'APPROVED' },
    });

    if (!business) {
      return res.status(404).send(`
        <html>
          <body>
            <h2>Activation failed</h2>
            <p>We couldn't find your account. Please try again or contact support.</p>
          </body>
        </html>
      `);
    }

    return res.status(200).send(`
      <html>
        <head>
          <meta http-equiv="refresh" content="5; />
        </head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 40px;">
          <h2>Account Activated ✅</h2>
          <p>Your account has been successfully activated!</p>
          <p>You can now <a href="${CLIENT_BASE_URL}/login">login here</a>.</p>
          <p>You will be redirected shortly...</p>
        </body>
      </html>
    `);

  } catch (error: any) {
    console.error(error);
    return res.status(500).send(`
      <html>
        <body>
          <h2>Error Activating Account</h2>
          <p>Something went wrong. Please try again later.</p>
        </body>
      </html>
    `);
  }
};

const getBusinessDetails = async (req: Request, res: Response) => {
  try {
     const { businessId } = req.query;

    if (!businessId || typeof businessId !== 'string') {
      return res.status(400).json({ message: 'Missing or invalid businessId' });
    }

    const business = await prisma.business.findUnique({
      where: { businessId },
      include: { items: true, events: true, promos: true },
    });
    if (!business) return res.status(404).json({ message: "Business not found" });
    res.status(200).json(business);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBusinesses = async (req: Request, res: Response) => {
  try {
   const { category } = req.query;

    const businesses = await prisma.business.findMany({
      where: category
        ? {
            category: {
              equals: category as string,
              mode: 'insensitive',
            },
          }
        : undefined,
    });
    
    if (businesses.length === 0) {
      return res.status(404).json({ message: "No businesses found" });
    }

    res.status(200).json(businesses);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const addEventToBusiness = async (req: Request, res: Response) => {
  try {
     const { businessId } = req.query;
    if (!businessId || typeof businessId !== 'string') {
      return res.status(400).json({ message: 'Missing or invalid businessId' });
    }

    const { title, description, location, longitude, latitude, date, paid } = req.body;

    const event = await prisma.event.create({
      data: { title, description, location, longitude, latitude, date, businessId, paid },
    });

    res.status(201).json({ message: "Event added", event });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getEvents = async (req: Request, res: Response) => {
  try {
    const { businessId } = req.query;
    if (!businessId || typeof businessId !== 'string') {
      return res.status(400).json({ message: 'Missing or invalid businessId' });
    }
    const events = await prisma.event.findMany({ where: { businessId } });
    res.status(200).json(events);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const addPromo = async (req: Request, res: Response) => {
  try {
    const { businessId } = req.query;

    if (!businessId || typeof businessId !== 'string') {
      return res.status(400).json({ message: 'Missing or invalid businessId' });
    }

    const { name, description, startDate, endDate, image } = req.body;

    const promo = await prisma.promo.create({
      data: { name, description, startDate, endDate, businessId, images: image },
    });

    res.status(201).json({ message: "Promo added", promo });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getPromos = async (req: Request, res: Response) => {
  try {
    const { businessId } = req.query;

    if (!businessId || typeof businessId !== 'string') {
      return res.status(400).json({ message: 'Missing or invalid businessId' });
    }

    const promos = await prisma.promo.findMany({ 
      where: { 
        businessId,
        endDate: {
          gte: new Date(),
        }
       }
      });
    res.status(200).json(promos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPromos = async (req: Request, res: Response) => {
  try {
    const promos = await prisma.promo.findMany({
      where: {
        endDate: {
          gte: new Date(),
        }
      }
    });
    res.status(200).json(promos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const deletePromo = async (req: Request, res: Response) => {
  try {
    const { promoId } = req.query;

    if (!promoId || typeof promoId !== 'string') {
      return res.status(400).json({ message: 'Missing or invalid promoId' });
    }

    await prisma.promo.delete({ where: { promoId } });
    res.status(200).json({ message: "Promo deleted" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req: Request, res: Response) => {
  try {
    const multerReq = req as MulterRequest;
    const { businessId } = req.params;
    const { name, description, price } = req.body;

    if (!name || !description || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if business exists
    const business = await prisma.business.findUnique({
      where: { businessId },
    });

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    const uploadResult = await uploadImages(req, res);

    if (
      !uploadResult ||
      typeof uploadResult !== "object" ||
      !("url" in uploadResult)
    ) {
      return;
    }

    const newProduct = await prisma.item.create({
      data: {
        name,
        description,
        price,
        image: uploadResult.url as string,
        businessId,
      },
    });

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export {
  registerBusiness,
  activateBusiness,
  getBusinessDetails,
  getAllBusinesses,
  addEventToBusiness,
  getEvents,
  getAllEvents,
  addPromo,
  getPromos,
  getAllPromos,
  deletePromo,
  addProduct,
};
