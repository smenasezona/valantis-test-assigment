import styles from './ProductItem.module.scss'

const ProductItem = ({product}) => {
    return (
        <main className={styles.item_container}>
            <p className={styles.product_id}>{product.id}</p>
            {product.brand ?
                <p>
                    <span className={styles.product_name}>{product.product} от </span>
                    <span className={styles.product_brand}>{product.brand}</span>
                </p> :
                <p className={styles.product_name}>{product.product}</p>
            }
            <span className={styles.product_price}>{product.price}</span>
        </main>
    );
}

export default ProductItem