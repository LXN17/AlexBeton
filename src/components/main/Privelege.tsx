import privelegeStyles from '../../styles/privelege.module.scss'
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

const Privelege = () => {
	return (
		<section className={privelegeStyles.privelege} id='privelege'>
			<div className='container'>
				<motion.h2
					className={privelegeStyles.privelege_title}
					variants={fadeInAnimationVariants}
					initial='initial'
					whileInView='animate'
					viewport={{ once: true }}
				>
					Почему товары от AB?
				</motion.h2>
				<ul className={privelegeStyles.privelege_list}>
					<motion.li
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
					>
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
					</motion.li>
					<motion.li
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
					>
						<img src='images/privelege_item2.png' alt='' />
						<h3 className={privelegeStyles.privelege_list_title}>
							Качественная продукция
						</h3>
						<p className={privelegeStyles.privelege_list_description}>
							Завод "Алекс-Бетон" обеспечен всем необходимым для быстрого и
							качественного производства бетона любого класса и марки. Благодаря
							этому вы можете быть уверены в качестве.
						</p>
					</motion.li>
					<motion.li
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
					>
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
					</motion.li>
					<motion.li
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
					>
						<img src='images/privelege_item4.png' alt='' />
						<h3 className={privelegeStyles.privelege_list_title}>Доставка</h3>
						<p className={privelegeStyles.privelege_list_description}>
							Доставка ведется на собственной технике до стройплощадки
							заказчика.
						</p>
					</motion.li>
				</ul>
			</div>
		</section>
	)
}

export default Privelege
