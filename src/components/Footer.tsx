import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
	return (
		<div className={footerStyles.footer}>
			<div className='container'>
				<nav className={footerStyles.footer_menu}>
					<ul className={footerStyles.footer_menu_list}>
						<li className={footerStyles.footer_menu_item}>
							<h3 className={footerStyles.footer_menu_title}>Разделы</h3>
						</li>
						<li className={footerStyles.footer_menu_item}>
							<a href='#privelege' className={footerStyles.footer_menu_link}>
								Главная
							</a>
						</li>
						<li className={footerStyles.footer_menu_item}>
							<a href='#price' className={footerStyles.footer_menu_link}>
								Товары
							</a>
						</li>
						<li className={footerStyles.footer_menu_item}>
							<a href='#vehicle' className={footerStyles.footer_menu_link}>
								Техника
							</a>
						</li>
					</ul>
					<ul className={footerStyles.footer_menu_list}>
						<li className={footerStyles.footer_menu_item}>
							<h3 className={footerStyles.footer_menu_title}>Ресурсы</h3>
						</li>
						<li className={footerStyles.footer_menu_item}>
							<a href='#' className={footerStyles.footer_menu_link}>
								+7 926 925-00-02
							</a>
						</li>
						<li className={footerStyles.footer_menu_item}>
							<a href='#' className={footerStyles.footer_menu_link}>
								+7 495 407-00-70
							</a>
						</li>
						<li className={footerStyles.footer_menu_item}>
							<a href='#' className={footerStyles.footer_menu_link}>
								+7 925 290-12-34
							</a>
						</li>
					</ul>
					<ul className='footer_menu-list'>
						<li className={footerStyles.footer_menu_item}>
							<h3 className={footerStyles.footer_menu_title}>Адрес</h3>
						</li>
						<li className={footerStyles.footer_menu_item}>
							<span>Деревня Духанино, Истринский район</span>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Footer
