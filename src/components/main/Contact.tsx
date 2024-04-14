import contactStyles from '../../styles/contact.module.scss'

const Contact = () => {
	return (
		<div className={contactStyles.contacts} id='contacts'>
			<div className='container'>
				<h2 className={contactStyles.contact_title}>Контакты</h2>
				<div className={contactStyles.contact_window}>
					<div className={contactStyles.contact_left}>
						<div className={contactStyles.contact_call}>
							<h4>Наш адрес:</h4>
							<div className={contactStyles.contact_call_adress}>
								<img src='../../../public/images/point.png' alt='' />
								<span>
									{' '}
									д. Духанино, городской округ Истра, Московская область
								</span>
							</div>
							<a
								href='tel:89269250002'
								className={contactStyles.contact_call_phone}
							>
								<img src='../../../public/images/phone.png' alt='' />
								<span> +7 (926) 925-00-02</span>
							</a>
							<a
								href='tel:84954070070'
								className={contactStyles.contact_call_phone}
							>
								<img src='../../../public/images/phone.png' alt='' />
								<span> +7 (495) 407-00-70</span>
							</a>
							<a
								href='tel:89252901234'
								className={contactStyles.contact_call_phone}
							>
								<img src='../../../public/images/phone.png' alt='' />
								<span> +7 (925) 290-12-34</span>
							</a>
							<a href='' className={contactStyles.contact_call_email}>
								<img src='../../../public/images/mail.png' alt='' />
								<span> gasanov.b65@mail.ru</span>
							</a>
							<a href='' className={contactStyles.contact_call_email}>
								<img src='../../../public/images/mail.png' alt='' />
								<span> leqso_leqso.05@mail.ru</span>
							</a>
							<div className={contactStyles.contact_form}>
								<div className={contactStyles.contact_form_content}>
									<p className={contactStyles.contact_form_title}>
										Оставьте заявку ниже
									</p>
									<form method='post' id='form'>
										<div className={contactStyles.form_group}>
											<div className={contactStyles.form_input}>
												<input
													type='text'
													className={contactStyles.form_control}
													id='exampleInputName'
													name='name'
													aria-describedby='nameHelp'
													placeholder='Имя'
													required
												/>
											</div>
											<div className={contactStyles.form_input}>
												<input
													type='tel'
													className={contactStyles.form_control}
													id='exampleInputPhone'
													name='phone'
													aria-describedby='telHelp'
													placeholder='+7(___)-___-__-__'
													required
												/>
											</div>
											<div>
												<button
													className={contactStyles.button_submit}
													type='submit'
												>
													Отправить заявку
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className={contactStyles.contact_right}> s</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
