import { Events } from "./events.types";
import { openHours } from "./hours.types";
import { Items } from "./items.types";
import { Promos } from "./promo.types";

export interface Business {
  role: string;
  _id: string;
  name: string;
  category: string;
  logo: string;
  items: Items;
  events: Events;
  promo: Promos;
  __v: number;
  openHours: openHours;
}
