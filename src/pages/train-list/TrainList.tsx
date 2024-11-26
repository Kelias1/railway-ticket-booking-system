import TrainSelection from '../../components/train-selection/TrainSelection';
import './train-list.css';

function TrainList() {
	return (
		<div className="choice-train__list">
			<header className="header__list-trains">
				<div className="list__train-found">
					<p>найдено</p>
					<span>5</span>
				</div>
				<div className="list__train-sort">
					<p>сортировать по: <span className="sort__select">времени</span>
					</p>
					<div className="hide-section** sort__select-option">
						<div className="select__time">времени</div>
						<div className="select__price">стоимости</div>
						<div className="select__duration">длительности</div>
					</div>
				</div>
				<div className="list__train-show">
					<p>показывать по:</p>
					<span>5</span>
					<span>10</span>
					<span>20</span>
				</div>
			</header>
			<div className="list-trains">
				<TrainSelection />
				{/* ////START////
				<!-- TRAIN 1 -->
				<article className="train__option">
					<div className="train__name">
						<span className="train__name-img"></span>
						<h4 className="train__name-number">116С</h4>
						<div className="train__name-destination">
							<p className="train__name-city">Адлер →</p>
							<p className="train__name-city">Москва →</p>
							<p className="train__name-city">Санкт-Петербург</p>
						</div>
					</div>
					<div className="train__destination">
						<div className="train__destination-route">
							<div className="train__destination-from">
								<p className="destination__time">00:10</p>
								<div className="destination__from">
									<p className="destination__city">москва</p>
									<p className="destintion__station">Курский вокзал</p>
								</div>
							</div>
							<div className="train__destination-time">
								<p className="travel__time">9 : 42</p>
								<span className="destination__arrow"></span>
							</div>
							<div className="train__destination-to">
								<p className="destination__time">09:52</p>
								<div className="destination__to">
									<p className="destination__city">Санкт-Петербург</p>
									<p className="destintion__station">Ладожский вокзал</p>
								</div>
							</div>
						</div>
						<div className="train__destination-route">
							<div className="train__destination-from">
								<p className="destination__time">00:10</p>
								<div className="destination__from">
									<p className="destination__city">москва</p>
									<p className="destintion__station">Курский вокзал</p>
								</div>
							</div>
							<div className="train__destination-time">
								<p className="travel__time">9 : 42</p>
								<span className="destination__arrow-return"></span>
							</div>
							<div className="train__destination-to">
								<p className="destination__time">09:52</p>
								<div className="destination__to">
									<p className="destination__city">Санкт-Петербург</p>
									<p className="destintion__station">Ладожский вокзал</p>
								</div>
							</div>
						</div>
					</div>
					<div className="train__ticket-price">
						<div className="train__ticket-options">
							<div className="train__ticket">
								<p className="ticket__class">Сидячий</p>
								<span className="amount__seat">
									18
									<div className="hide-section seat__up-show**">
										<div className="seat__up">
											<p className="ticket__class">верхние</p>
											<p className="seat__ticket-price">4885</p>
											<span className="currency-symbol"></span>
										</div>
										<div className="seat__up">
											<p className="ticket__class">верхние</p>
											<p className="seat__ticket-price">4885</p>
											<span className="currency-symbol"></span>
										</div>
										<div className="seat__up">
											<p className="ticket__class">верхние</p>
											<p className="seat__ticket-price">4885</p>
											<span className="currency-symbol"></span>
										</div>
									</div>
								</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">1 920</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Плацкарт</p>
								<span className="amount__seat">
									18
									<div className="hide-section seat__up-show**">
										<div className="seat__up">
											<p className="ticket__class">верхние</p>
											<p className="seat__ticket-price">4885</p>
											<span className="currency-symbol"></span>
										</div>
										<div className="seat__up">
											<p className="ticket__class">верхние</p>
											<p className="seat__ticket-price">4885</p>
											<span className="currency-symbol"></span>
										</div>
										<div className="seat__up">
											<p className="ticket__class">верхние</p>
											<p className="seat__ticket-price">4885</p>
											<span className="currency-symbol"></span>
										</div>
									</div>
								</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">2 530</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Купе</p>
								<span className="amount__seat">
									18
									<div className="hide-section** seat__up-show">
										<div className="seat__up">
											<p className="ticket__class">верхние</p>
											<span className="amount__seat">19</span>
											<p className="seat__ticket-price">2 920</p>
											<span className="currency-symbol"></span>
										</div>
										<div className="seat__up">
											<p className="ticket__class">нижние</p>
											<span className="amount__seat">19</span>
											<p className="seat__ticket-price">3 530</p>
											<span className="currency-symbol"></span>
										</div>
									</div>
								</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">3 820</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
						</div>
						<div className="train__amenities">
							<span className="train__amenities-wifi** amenities-wifi__includes"></span>
							<span className="train__amenities-express** amenities-express__includes"></span>
							<span className="train__amenities-coffee** amenities-coffee__includes"></span>
						</div>
						<button className="choice-train__btn" type="button">Выбрать места</button>
					</div>
				</article>
				 <!-- TRAIN 2 --> 
				<article className="train__option train__option2">
					<div className="train__name">
						<span className="train__name-img"></span>
						<h4 className="train__name-number">020У</h4>
						<div className="train__name-destination">
							<p className="train__name-city">Москва →</p>
							<p className="train__name-city">Санкт-Петербург</p>
							<p className="train__name-text">«Мегаполис»</p>
						</div>
					</div>
					<div className="train__destination">
						<div className="train__destination-route">
							<div className="train__destination-from">
								<p className="destination__time">00:20</p>
								<div className="destination__from">
									<p className="destination__city">москва</p>
									<p className="destintion__station">Ленинградский вокзал</p>
								</div>
							</div>
							<div className="train__destination-time">
								<p className="travel__time">8 : 39</p>
								<span className="destination__arrow"></span>
							</div>
							<div className="train__destination-to">
								<p className="destination__time">08:59</p>
								<div className="destination__to">
									<p className="destination__city">Санкт-Петербург</p>
									<p className="destintion__station">Московский вокзал</p>
								</div>
							</div>
						</div>
					</div>
					<div className="train__ticket-price">
						<div className="train__ticket-options">
							<div className="train__ticket">
								<p className="ticket__class">Купе</p>
								<span className="amount__seat">90</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">3 950</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Люкс</p>
								<span className="amount__seat">31</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">4 950</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
						</div>
						<div className="train__amenities">
							<span className="train__amenities-wifi** amenities-wifi__includes"></span>
							<span className="train__amenities-express** amenities-express__includes"></span>
							<span className="train__amenities-coffee** amenities-coffee__includes"></span>
						</div>
						<button className="choice-train__btn" type="button">Выбрать места</button>
					</div>
				</article>
				<!-- TRAIN 3 -->
				<article className="train__option">
					<div className="train__name">
						<span className="train__name-img"></span>
						<h4 className="train__name-number">116С</h4>
						<div className="train__name-destination">
							<p className="train__name-city">Нижний Новгород →</p>
							<p className="train__name-city">Москва →</p>
							<p className="train__name-city">Санкт-Петербург</p>
							<p className="train__name-text">«Волга»</p>
						</div>
					</div>
					<div className="train__destination">
						<div className="train__destination-route">
							<div className="train__destination-from">
								<p className="destination__time">00:41</p>
								<div className="destination__from">
									<p className="destination__city">москва</p>
									<p className="destintion__station">Ленинградский вокзал</p>
								</div>
							</div>
							<div className="train__destination-time">
								<p className="travel__time">8 : 32</p>
								<span className="destination__arrow"></span>
							</div>
							<div className="train__destination-to">
								<p className="destination__time">09:13</p>
								<div className="destination__to">
									<p className="destination__city">Санкт-Петербург</p>
									<p className="destintion__station">Ладожский вокзал</p>
								</div>
							</div>
						</div>
					</div>
					<div className="train__ticket-price">
						<div className="train__ticket-options">
							<div className="train__ticket">
								<p className="ticket__class">Плацкарт</p>
								<span className="amount__seat">52</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">2 530</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Купе</p>
								<span className="amount__seat">24</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">3 820</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Люкс</p>
								<span className="amount__seat">15</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">4 950</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
						</div>
						<div className="train__amenities">
							<span className="train__amenities-wifi** amenities-wifi__includes"></span>
							<span className="train__amenities-express** amenities-express__includes"></span>
							<span className="train__amenities-coffee** amenities-coffee__includes"></span>
						</div>
						<button className="choice-train__btn" type="button">Выбрать места</button>
					</div>
				</article>
				<!-- TRAIN 4 -->
				<article className="train__option">
					<div className="train__name">
						<span className="train__name-img"></span>
						<h4 className="train__name-number">116С</h4>
						<div className="train__name-destination">
							<p className="train__name-city">Адлер →</p>
							<p className="train__name-city">Москва →</p>
							<p className="train__name-city">Санкт-Петербург</p>
						</div>
					</div>
					<div className="train__destination">
						<div className="train__destination-route">
							<div className="train__destination-from">
								<p className="destination__time">00:10</p>
								<div className="destination__from">
									<p className="destination__city">москва</p>
									<p className="destintion__station">Курский вокзал</p>
								</div>
							</div>
							<div className="train__destination-time">
								<p className="travel__time">9 : 42</p>
								<span className="destination__arrow"></span>
							</div>
							<div className="train__destination-to">
								<p className="destination__time">09:52</p>
								<div className="destination__to">
									<p className="destination__city">Санкт-Петербург</p>
									<p className="destintion__station">Ладожский вокзал</p>
								</div>
							</div>
						</div>
					</div>
					<div className="train__ticket-price">
						<div className="train__ticket-options">
							<div className="train__ticket">
								<p className="ticket__class">Сидячий</p>
								<span className="amount__seat">88</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">1 920</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Плацкарт</p>
								<span className="amount__seat">52</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">2 530</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Купе</p>
								<span className="amount__seat">24</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">3 820</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Люкс</p>
								<span className="amount__seat">15</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">4 950</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
						</div>
						<div className="train__amenities">
							<span className="train__amenities-wifi** amenities-wifi__includes"></span>
							<span className="train__amenities-express** amenities-express__includes"></span>
							<span className="train__amenities-coffee** amenities-coffee__includes"></span>
						</div>
						<button className="choice-train__btn" type="button">Выбрать места</button>
					</div>
				</article>
				<!-- TRAIN 5 -->
				<article className="train__option">
					<div className="train__name">
						<span className="train__name-img"></span>
						<h4 className="train__name-number">116С</h4>
						<div className="train__name-destination">
							<p className="train__name-city">Адлер →</p>
							<p className="train__name-city">Москва →</p>
							<p className="train__name-city">Санкт-Петербург</p>
						</div>
					</div>
					<div className="train__destination">
						<div className="train__destination-route">
							<div className="train__destination-from">
								<p className="destination__time">00:10</p>
								<div className="destination__from">
									<p className="destination__city">москва</p>
									<p className="destintion__station">Курский вокзал</p>
								</div>
							</div>
							<div className="train__destination-time">
								<p className="travel__time">9 : 42</p>
								<span className="destination__arrow"></span>
							</div>
							<div className="train__destination-to">
								<p className="destination__time">09:52</p>
								<div className="destination__to">
									<p className="destination__city">Санкт-Петербург</p>
									<p className="destintion__station">Ладожский вокзал</p>
								</div>
							</div>
						</div>
					</div>
					<div className="train__ticket-price">
						<div className="train__ticket-options">
							<div className="train__ticket">
								<p className="ticket__class">Сидячий</p>
								<span className="amount__seat">88</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">1 920</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Плацкарт</p>
								<span className="amount__seat">52</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">2 530</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Купе</p>
								<span className="amount__seat">24</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">3 820</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
							<div className="train__ticket">
								<p className="ticket__class">Люкс</p>
								<span className="amount__seat">15</span>
								<div className="ticket__start-price">
									<p className="start-price__text">от</p>
									<p className="start-price__number">4 950</p>
									<span className="currency-symbol"></span>
								</div>
							</div>
						</div>
						<div className="train__amenities">
							<span className="train__amenities-wifi** amenities-wifi__includes"></span>
							<span className="train__amenities-express** amenities-express__includes"></span>
							<span className="train__amenities-coffee** amenities-coffee__includes"></span>
						</div>
						<button className="choice-train__btn" type="button">Выбрать места</button>
					</div>
				</article>
				////END///// */}
			</div>
			{/* <!-- PAGES --> */}
			<section className="list-trains__footer">
				<h2 className="visually-hidden">List trains footer</h2>
				<div className="footer-pages">
					<div className="footer-page__previous"></div>
					<div className="footer-page">1</div>
					<div className="footer-page">2</div>
					<div className="footer-page">3</div>
					<div className="footer-page__next"></div>
				</div>
			</section>
		</div>
	)
}

export default TrainList;