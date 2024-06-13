import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the item
interface Item {
    name: string;
    description: string;
    price: string;
    image: string;
}

// Define the interface for the business
interface Business extends Document {
    name: string;
    category: string;
    logo: string;
    items: Item[];
}

// Define the schema for the item
const itemSchema = new Schema<Item>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true }
});

// Define the schema for the business
const businessSchema = new Schema<Business>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    logo: { type: String, required: true },
    items: { type: [itemSchema], required: true }
});

const BusinessModel = mongoose.model<Business>('Business', businessSchema);

export default BusinessModel;