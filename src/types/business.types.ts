import { Events } from "./events.types";
import { openHours } from "./hours.types";
import { Items } from "./items.types";
import { Promos } from "./promo.types";

// export interface Business {
//   role: string;
//   _id: string;
//   name: string;
//   category: string;
//   logo: string;
//   items: Items;
//   events: Events;
//   promo: Promos;
//   __v: number;
//   openHours: openHours;
// }

export interface Business {
  _id: string;
  name: string;
  category: string;
  email: string;
  phone: string;
  items: Items;
  password: string;
  role: string;
  location: string;
  openHours: openHours;
  website: string;
  description: string;
  events: Events;
  promo: Promos;
  __v: number;
}

export type Businesses = Business[];
