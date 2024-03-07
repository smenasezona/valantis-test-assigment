export const createActiveFilters = ({ product, price, brand }) => {
	const filters = {}
	if (product !== '') filters['product'] = product
	if (price !== '') filters['price'] = price
	if (brand !== '') filters['brand'] = brand

	return Object.entries(filters)
		.filter(([key, value]) => value !== '')
		.reduce((acc, [key, value]) => {
			acc[key] = value
			return acc
		}, {})
}
