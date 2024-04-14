import React from 'react'
import priceStyles from '../styles/price.module.scss'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 20,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
			duration: 0.1,
		},
	}),
}

interface TableComponentProps {
	mainTitle: string
	id: number
	title: string
	price: string[]
}

const TableComponent: React.FC<TableComponentProps> = product => {
	return (
		<div className={priceStyles.price_group_table}>
			<div className={priceStyles.price_inner}>
				<h3 className={priceStyles.price_table_title}>
					{product?.mainTitle + ': ' + product?.title}
				</h3>
				<div className={priceStyles.price_table}>
					<span className={priceStyles.price_cube}>
						руб/м<sup>3</sup>
					</span>
					<table>
						<tbody>
							{product?.price.map((item, index) => (
								<tr key={index}>
									<td>{item.split('-')[0]}</td>
									<td>{item.split('-')[1]}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default TableComponent
