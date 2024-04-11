import priceStyles from '../../price.module.scss'
import products from '../../assets/products.json'
import TableComponent from '../TableComponent'

const Price = () => {
	console.log(products)

	return (
		<div className={priceStyles.price}>
			<div className='container'>
				<h2 className={priceStyles.price_title}>Товары и цены</h2>
				<div className={priceStyles.price_list}>
					{products.map(product =>
						product.map((item, index) => (
							<TableComponent {...item} key={index} />
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default Price
