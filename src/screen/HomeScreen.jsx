import Navbar from '../Components/Navbar/Navbar.jsx'
import ProductList from '../Components/ProductsList/ProductList.jsx'
import styles from './HomeScreen.module.scss'
const HomeScreen = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<ProductList />
		</div>
	)
}

export default HomeScreen
