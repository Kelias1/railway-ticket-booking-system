import './footer.css';

function Footer() {
	return (
		<div className="container">
		<footer id="footer" className="footer">
			<div className="hide-section">
				<div className="modal-img"></div>
				<p className="modal__text"></p>
				<button className="modal__btn" type="button">Понятно</button>
			</div>
			<div className="footer__content">
				<div className="footer__contacts">
					<h2 className="contacts__title">Свяжитесь с нами</h2>
					<address className="contacts__wrap">
						<a href="tel:88000000000" className="contacts__item tel">8 (800) 000 00 00
						</a>
						<a href="mailto:inbox@mail.ru" className="contacts__item email">inbox@mail.ru
						</a>
						<a href="tu.train.tickets" className="contacts__item skype" target="_blank">tu.train.tickets
						</a>
						<a href="google.maps.com" className="contacts__item address" target="_blank">г. Москва <br />ул. Московская 27-35 <br /> 555 555
						</a>
					</address>
				</div>
				<div className="footer__subscribe">
					<h2 className="subscribe__title">Подписка</h2>
					<form className="subscribe__form">
						<p className="subscribe__form-title">Будьте в курсе событий</p>
						<input className="subscribe__form-input" type="text" placeholder="e-mail" value="" />
						<button className="subscribe__form-btn" type="button">отправить</button>
					</form>
					<div className="subscribe__socials-wrap">
						<span className="subscribe__socials-title">Подписывайтесь на нас</span>
						<ul className="subscribe__socials-list">
							<li>
								<a href="https://www.youtube.com/" className="subscribe__social-item social__youtube" target="_blank">
									<span className="visually-hidden">youtube</span>
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/" className="subscribe__social-item social__linkedin" target="_blank">
									<span className="visually-hidden">linkedin</span>
								</a>
							</li>
							<li>
								<a href="https://www.google.com/" className="subscribe__social-item social__google" target="_blank">
									<span className="visually-hidden">google+</span>
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/" className="subscribe__social-item social__facebook" target="_blank">
									<span className="visually-hidden">facebook</span>
								</a>
							</li>
							<li>
								<a href="https://x.com/" className="subscribe__social-item social__X" target="_blank">
									<span className="visually-hidden">X</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer__line">
				<span className="footer__logo">Лого</span>
				<a href="#" className="footer__btn-up"></a>
				<p className="footer__copyright">2018 web</p>
			</div>
		</footer>
	</div>
	)
}

export default Footer;