import {getIds, getItems} from "./apiActions.js";

export const fetchProducts = async (currentPage, productsPerPage) => {
    let ids = await getIds((currentPage - 1) * productsPerPage, productsPerPage);
    return await getItems(ids);
};
