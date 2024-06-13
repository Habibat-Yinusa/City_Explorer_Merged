import { Request, Response } from 'express';
import BusinessModel from '../models/businessPage';

 const registerBusiness = async (req: Request, res: Response) => {
    try {
        const { name, category, logo, items } = req.body;

        const newBusiness = new BusinessModel({
            name,
            category,
            logo,
            items
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
 const getAllBusinesses = async (req: Request, res: Response) => {
    try {
        const businesses = await BusinessModel.find();

        res.status(200).send(businesses);
    } catch (error: any) {
        res.status(500).send({ message: error.message });
    }
};

export { registerBusiness, getBusinessDetails, getAllBusinesses }