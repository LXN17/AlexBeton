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
				<div className={priceStyles.price_button}>
					<button id='openBtn2' className={priceStyles.price_link}>
						Сделать заказ
					</button>
				</div>
			</div>
		</div>
	)
}

export default Price
