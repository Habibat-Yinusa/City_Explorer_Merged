import mongoose, { Document, Schema } from 'mongoose';

// defining the interfaces
interface Item {
    name: string;
    description: string;
    price: string;
    image: string;
}

interface Event {
    title: string;
    description: string;
    date: Date;
    venue: string;
}
 
interface Promo {
    name: string;
    description: string;
    timeValid: string;
}
interface Hours {
    day: string;
    time: string;
}

// Define the interface for the business
interface Business extends Document {
    name: string;
    description: string;
    category: string;
    logo: string;
    items: Item[];
    events: Event[];
    promo: Promo[];
    location: string;
    openHours: Hours[];
    phone: string;
    email: string;
    website: string; 

}

// schema for the item
const itemSchema = new Schema<Item>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true }
});

// schema for the event
const eventSchema = new Schema<Event>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    venue: { type: String, required: true }
});
// schema for promos
const promoSchema = new Schema<Promo>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    timeValid: { type: String, required: true },
   
});

//  schema for the business
const businessSchema = new Schema<Business>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    logo: { type: String, required: true },
    items: { type: [itemSchema], required: true },
    events: { type: [eventSchema], default: [] },
    promo: { type: [promoSchema], default: [] }
});

const BusinessModel = mongoose.model<Business>('Business', businessSchema);

export default BusinessModel;