import styles from './Skeleton.module.scss'

const Skeleton = () => {
	return (
		<div className={styles.skeleton}>
			<div className={styles.card}></div>
		</div>
	)
}

export default Skeleton
