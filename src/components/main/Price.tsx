import priceStyles from '../../styles/price.module.scss'
import products from '../../assets/products.json'
import TableComponent from '../TableComponent'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
}

const Price = () => {
	console.log(products)

	return (
		<motion.section className={priceStyles.price} id='price'>
			<div className='container'>
				<motion.h2
					variants={fadeInAnimationVariants}
					initial='initial'
					whileInView='animate'
					viewport={{ once: true }}
					className={priceStyles.price_title}
				>
					Товары и цены
				</motion.h2>
				<motion.div className={priceStyles.price_list}>
					{products.map(product =>
						product.map((item, index) => (
							<motion.div
								variants={fadeInAnimationVariants}
								initial='initial'
								whileInView='animate'
								viewport={{ once: true }}
								custom={index}
							>
								<TableComponent {...item} key={index} />
							</motion.div>
						))
					)}
				</motion.div>
				<motion.div
					variants={fadeInAnimationVariants}
					initial='initial'
					whileInView='animate'
					viewport={{ once: true }}
					className={priceStyles.price_button}
				>
					<button id='openBtn2' className={priceStyles.price_link}>
						<a href='#contacts'>Сделать заказ</a>
					</button>
				</motion.div>
			</div>
		</motion.section>
	)
}

export default Price
