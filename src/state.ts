import { atom } from "nanostores";

export type City = "Select City" | "Auckland" | "Welington" | "Christchurch";
export const city = atom<City>("Select City");
