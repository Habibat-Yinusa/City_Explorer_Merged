import { openHours } from "./hours.types";
import { Items } from "./items.types";

export interface RegisterBusiness {
  name: string;
  category: string;
  password: string;
  logo: string;
  items: Items;
  location: string;
  openHours: openHours;
  phone: string;
  email: string;
  website: string;
}
