import { Request, Response } from 'express';
import BusinessModel from '../models/businessPage';

export const registerBusiness = async (req: Request, res: Response) => {
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
