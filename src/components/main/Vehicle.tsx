import vehicles from '../../assets/vehicles.json'
import vehicleStyles from '../../styles/vehicle.module.scss'

const Vehicle = () => {
	return (
		<section className={vehicleStyles.vehicle} id='vehicle'>
			<div className='container'>
				<div>
					<h2 className={vehicleStyles.vehicle_title}>Техника</h2>
					<p className={vehicleStyles.vehicle_subtitle}>
						Наша компания предоставляет различную технику в аренду. Мы
						предлагаем наилучшие условия для сотрудничества и обеспечиваем своих
						заказчиков только качественной техникой, способной помочь в самых
						непростых ситуациях.
					</p>
				</div>
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
		</section>
	)
}

export default Vehicle
