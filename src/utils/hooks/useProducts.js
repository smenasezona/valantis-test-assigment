import {PRODUCTS_PER_PAGE} from "../../constants/constants.js";
import {filter} from "../../api/apiActions.js";
import {getIds} from "../../api/apiActions.js";
import {getItems} from "../../api/apiActions.js";
import {removeDuplicates} from "../removeDuplicates.js";
import {useState} from "react";
import {useEffect} from "react";
import {TOTAL_IDS} from "../../constants/constants.js";

export const useProducts = (initialPage, initialFilters) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [filters, setFilters] = useState(initialFilters);
    const [skeletonCount, setSkeletonCount] = useState(0);
    const [totalPages, setTotalPages] = useState(Math.ceil(TOTAL_IDS / PRODUCTS_PER_PAGE));

    useEffect(() => {
        async function loadProducts() {
            setLoading(true);
            setSkeletonCount(PRODUCTS_PER_PAGE);
            let ids = [];
            if (Object.keys(filters).length > 0) {
                for (let field in filters) {
                    const filteredIds = await filter(field, filters[field]);
                    ids = [...ids, ...filteredIds];
                }
            } else {
                ids = await getIds(); // Получаем все идентификаторы, а не только для текущей страницы
            }
            const newTotalPages = Math.ceil(ids.length / PRODUCTS_PER_PAGE);
            setTotalPages(newTotalPages); // Обновляем totalPages здесь

            const items = await getItems(
                ids.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE)); // Получаем только товары для текущей страницы
            const uniqueItems = removeDuplicates(items);
            setLoading(false);
            setProducts(uniqueItems);
        }

        loadProducts();
    }, [currentPage, filters]);

    return {products, loading, currentPage, totalPages, setCurrentPage, setFilters, skeletonCount};
};
