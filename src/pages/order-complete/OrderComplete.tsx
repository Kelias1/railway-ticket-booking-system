import './order-complete.css';

function OrderComplete() {
	return (
		<div className='order-complete__container'>
			<h1 className='order-complete__title'>Благодарим Вас за заказ!</h1>

			<div className='order-complete'>
				<div className='order-complete__number-price'>
					<h3 className='order__number'>№Заказа 285АА</h3>
					<div className='order__price'>
						<p className='order__price-text'>сумма</p>
						<div className='order__price-number'>
							<p>7 760</p>
							<span className='order__currency-symbol'></span>
						</div>
					</div>
				</div>

				<div className='order__info-wrap'>
					<div className='order__info'>
						<div className='order__info-email'>
							<div className='info__email-img'></div>
							<p className='order__info-text'>билеты будут<br /> отправлены <br />на ваш <b>e-mail</b></p>
						</div>

						<div className='order__info-print'>
							<div className='info__print-img'></div>
							<p className='order__info-text'><b>распечатайте</b><br /> и сохраняйте билеты <br /> до даты поездки</p>
						</div>

						<div className='order__info-present'>
							<div className='info__present-img'></div>
							<p className='order__info-text'><b>предьявите</b><br /> распечатанные <br /> билеты при посадке</p>
						</div>
					</div>
				</div>

				<div className='order__name-wrap'>
					<p className='order__name'>Ирина Эдуардовна!</p>
					<p className='order__name-text'>Ваш заказ успешно оформлен.<br /> В ближайшее время с вами свяжется наш оператор для подтверждения.</p>
					<p className='order__thankfulness'>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</p>
				</div>

				<div className='order__rating-wrap'>
					<div className='order__rating'>
						<p className='order__rating-text'>Оценить сервис</p>
						<div className='order__rating-stars'>
							<span className='star__one'>
								<svg width="46" height="44" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
									<path d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z" stroke="white" strokeWidth="2" />
								</svg>
							</span>
							<span className='star__two'>
								<svg width="46" height="44" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
									<path d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z" stroke="white" strokeWidth="2" />
								</svg>
							</span>
							<span className='star__three'>
								<svg width="46" height="44" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
									<path d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z" stroke="white" strokeWidth="2" />
								</svg>
							</span>
							<span className='star__four'>
								<svg width="46" height="44" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
									<path d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z" stroke="white" strokeWidth="2" />
								</svg>
							</span>
							<span className='star__five'>
								<svg width="46" height="44" viewBox="0 0 46 44" xmlns="http://www.w3.org/2000/svg">
									<path d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z" stroke="white" strokeWidth="2" />
								</svg>
							</span>
						</div>
					</div>
					<button className='order-complete__btn' type='button'>вернуться на главную</button>
				</div>

			</div>
		</div>
	)
}

export default OrderComplete;