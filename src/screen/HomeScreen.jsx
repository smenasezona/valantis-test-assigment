import Navbar from "../Components/Navbar/Navbar.jsx";
import styles from './HomeScreen.module.scss'
import ProductList from "../Components/ProductsList/ProductList.jsx";
const HomeScreen = () => {
    return <div className={styles.container}>
        <Navbar/>
        <ProductList/>
    </div>
}

export default HomeScreen