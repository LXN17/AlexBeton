import React from 'react'
import priceStyles from '../styles/price.module.scss'

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
