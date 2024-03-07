import {PRODUCTS_PER_PAGE} from '../../constants/constants.js'
import {createActiveFilters} from '../../utils/createActiveFilters.js'
import {useProducts} from '../../utils/hooks/useProducts.js'
import {getFromLocalStorage} from '../../utils/localStorage.js'
import Filter from '../Filter/Filter.jsx'
import Pagination from '../Pagination/Pagination.jsx'
import ProductItem from '../ProductItem/ProductItem.jsx'
import Skeleton from '../Skeleton/Skeleton.jsx'
import styles from './ProductList.module.scss'

const ProductList = () => {
    const {
        products,
        loading,
        currentPage,
        totalPages,
        setCurrentPage,
        setFilters,
    } = useProducts(getFromLocalStorage('currentPage', 1), {})

    const handleFilter = filterValues => {
        const activeFilters = createActiveFilters(filterValues)
        setFilters(Object.keys(activeFilters).length > 0 ? activeFilters : null)
        setCurrentPage(1)
    }

    return (
        <>
            <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalPages={totalPages}
            />
            <Filter onFilter={handleFilter}/>
            <div className={styles.list_container}>
                {loading
                    ? Array(PRODUCTS_PER_PAGE)
                        .fill()
                        .map((_, index) => <Skeleton key={index}/>)
                    : products.map(product => (
                        <ProductItem key={product.id} product={product}/>))}
            </div>
            <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                totalPages={totalPages}
            />
        </>
    )
}

export default ProductList
