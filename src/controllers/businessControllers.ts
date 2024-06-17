import { Request, Response } from 'express';
import BusinessModel, { BusinessEvent, PromoDeal } from '../models/businessPage';
import { Types } from 'mongoose';

 const registerBusiness = async (req: Request, res: Response) => {
    try {
        const { name, category, logo, items, location, openHours, phone, email, website } = req.body;

        const newBusiness = new BusinessModel({
            name,
            category,
            logo,
            items,
            location,
            openHours,
            phone,
            email,
            website
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

        
        const business = await BusinessModel.findById(businessId);

        if (!business) {
            return res.status(404).send({ message: 'Business not found' });
        }

        const newEvent = { title, description, venue, date };

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

export { registerBusiness, getBusinessDetails, getAllBusinesses, addEventToBusiness, getEvents, getAllEvents, addPromo, getPromo, getAllPromos, deletePromo }