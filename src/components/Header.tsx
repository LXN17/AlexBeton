import '../styles/styles.scss'
import headerStyles from '../styles/header.module.scss'
import { useState } from 'react'

const Header = () => {
	const [burgerOpen, setBurgerOpen] = useState(false)
	return (
		<div className={headerStyles.header}>
			<div className={headerStyles.header_left}>
				<div className={headerStyles.header_logo}>
					<a href='/'>
						<img src='images/Logo.png' alt='' />
					</a>
				</div>
				<div className={headerStyles.header_title}>
					<div className={headerStyles.header_title_name}>
						<a href='/'>ALEXBETON</a>
					</div>
					<div className={headerStyles.header_description}>
						<a href='/'>Производство и продажа строительных материалов</a>
					</div>
				</div>
			</div>
			<div
				className={headerStyles.header_menu_icon}
				onClick={() => {
					setBurgerOpen(prevState => !prevState)
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav
				className={
					!burgerOpen
						? headerStyles.header_right
						: headerStyles.header_right_active
				}
			>
				<ul className={headerStyles.header_navigation_list}>
					<li>
						<a href='#privelege'>ГЛАВНАЯ</a>
					</li>
					<li>
						<a href='#price'>ТОВАР</a>
					</li>
					<li>
						<a href='#vehicle'>ТЕХНИКА</a>
					</li>
					<li>
						<a href='#contacts'>КОНТАКТЫ</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
