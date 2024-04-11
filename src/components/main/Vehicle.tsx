import React from 'react'
import vehicles from '../../assets/vehicles.json'
import vehicleStyles from '../../vehicle.module.scss'

const Vehicle = () => {
	return (
		<div className={vehicleStyles.vehicle}>
			<div className='container'>
				<h2 className={vehicleStyles.vehicle_title}>Техника</h2>
				<p className={vehicleStyles.vehicle_subtitle}>
					Наша компания предоставляет различную технику в аренду. Мы предлагаем
					наилучшие условия для сотрудничества и обеспечиваем своих заказчиков
					только качественной техникой, способной помочь в самых непростых
					ситуациях.
				</p>
				<div className={vehicleStyles.vehicle_table}>
					<span className={vehicleStyles.vehicle_cube}>Cмена - 7 часов</span>

					<table>
						<thead>
							<tr>
								<th>Техника</th>
								<th>Цена (руб.)</th>
							</tr>
						</thead>
						<tbody>
							{vehicles.map((vehicle, index) => (
								<tr key={index}>
									<td>{vehicle.name}</td>
									<td>{vehicle.price}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Vehicle
