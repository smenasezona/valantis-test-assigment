import {useState} from "react";
import styles from './Filter.module.scss'

const Filter = ({onFilter}) => {
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const activeFilters = {};
        if (product !== '') activeFilters['product'] = product;
        if (price !== '') activeFilters['price'] = price;
        if (brand !== '') activeFilters['brand'] = brand;
        onFilter(activeFilters);
    };


    return (
        <div className={styles.container}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input type="text" className={styles.input} placeholder={'Название'} value={product} onChange={(e) => setProduct(e.target.value)}/>
                <input type="text" className={styles.input} placeholder={'Цена'} value={price} onChange={(e) => setPrice(e.target.value)}/>
                <input type="text" className={styles.input}  placeholder={'Бренд'} value={brand} onChange={(e) => setBrand(e.target.value)}/>
                <button className={styles.submit_btn} type="submit">Применить</button>
            </form>
        </div>
    );
};

export default Filter
