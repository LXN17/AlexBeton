import privelegeStyles from '../../privelege.module.scss'

const Privelege = () => {
	return (
		<div className={privelegeStyles.privelege}>
			<div className='container'>
				<h2 className={privelegeStyles.privelege_title}>
					Почему товары от AB?
				</h2>
				<ul className={privelegeStyles.privelege_list}>
					<li>
						<img src='images/privelege_item1.png' alt='' />
						<h3 className={privelegeStyles.privelege_list_title}>
							Широкий ассортимент
						</h3>
						<p className={privelegeStyles.privelege_list_description}>
							Мы реализуем бетонные смеси и бетон, а также карьерный и мытый
							песок, гравийный и гранитный щебень, другие товары для выполнения
							строительных работ. Вы с легкостью подберете нужную продукцию
							благодаря удобному каталогу.
						</p>
					</li>
					<li>
						<img src='images/privelege_item2.png' alt='' />
						<h3 className={privelegeStyles.privelege_list_title}>
							Качественная продукция
						</h3>
						<p className={privelegeStyles.privelege_list_description}>
							Завод "Алекс-Бетон" обеспечен всем необходимым для быстрого и
							качественного производства бетона любого класса и марки. Благодаря
							этому вы можете быть уверены в качестве.
						</p>
					</li>
					<li>
						<img src='images/privelege_item3.png' alt='' />
						<h3 className={privelegeStyles.privelege_list_title}>
							Собственное производство
						</h3>
						<p className={privelegeStyles.privelege_list_description}>
							Стоимость бетона не завышается нами. Это обусловлено наличием
							собственного производства и отсутствием посредников. Мы всегда
							придерживаемся лояльной ценовой политики и в отношении других
							товаров.
						</p>
					</li>
					<li>
						<img src='images/privelege_item4.png' alt='' />
						<h3 className={privelegeStyles.privelege_list_title}>Доставка</h3>
						<p className={privelegeStyles.privelege_list_description}>
							Доставка ведется на собственной технике до стройплощадки
							заказчика.
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Privelege
