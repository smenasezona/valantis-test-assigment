import {useEffect, useState} from "react";
import styles from './ProductList.module.scss'
import Skeleton from "../Skeleton/Skeleton.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import {PRODUCTS_PER_PAGE, TOTAL_IDS} from "../../constants/constants.js";
import ProductItem from "../ProductItem/ProductItem.jsx";
import {getFromLocalStorage, saveToLocalStorage} from "../../utils/localStorage.js";
import {removeDuplicates} from "../../utils/removeDuplicates.js";
import {filter} from "../../api/apiActions.js";
import {getIds} from "../../api/apiActions.js";
import {getItems} from "../../api/apiActions.js";
import Filter from "../Filter/Filter.jsx";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [skeletonCount, setSkeletonCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(getFromLocalStorage('currentPage', 1));
    const [filters, setFilters] = useState({})

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
                ids = await getIds((currentPage - 1) * PRODUCTS_PER_PAGE, PRODUCTS_PER_PAGE); // Иначе получаем идентификаторы товаров как обычно
            }
            const items = await getItems(ids);
            const uniqueItems = removeDuplicates(items);
            setLoading(false);
            setProducts(uniqueItems);
        }

        loadProducts();
    }, [currentPage, filters]);


    useEffect(() => {
        saveToLocalStorage('currentPage', currentPage);
    }, [currentPage]);

    const handleFilter = ({product, price, brand}) => {
        const filters = {};
        if (product !== '') filters['product'] = product;
        if (price !== '') filters['price'] = price;
        if (brand !== '') filters['brand'] = brand;

        const activeFilters = Object.entries(filters)
            .filter(([key, value]) => value !== '')
            .reduce((acc, [key, value]) => {
                acc[key] = value;
                return acc;
            }, {});

        setFilters(activeFilters);
        setCurrentPage(1);
    };


    return (
        <>
            <Pagination currentPage={currentPage} onPageChange={setCurrentPage}
                        totalPages={Math.ceil(TOTAL_IDS / PRODUCTS_PER_PAGE)}
            />

            <Filter onFilter={handleFilter}/>

            <div className={styles.list_container}>
                {loading ?
                    Array(skeletonCount).fill().map((_, index) => <Skeleton key={index}/>) :
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </div>
            <Pagination currentPage={currentPage} onPageChange={setCurrentPage}
                        totalPages={Math.ceil(TOTAL_IDS / PRODUCTS_PER_PAGE)}
            />
        </>
    )
}
export default ProductList
