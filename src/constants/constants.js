import md5 from "md5";

export const PRODUCTS_PER_PAGE = 50
export const TOTAL_IDS = 8004

export const API_URL = 'https://api.valantis.store:41000/'
export const PASSWORD = 'Valantis'
export const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
export const authString = md5(`${PASSWORD}_${timestamp}`);