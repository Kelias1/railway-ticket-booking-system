import TrainSelectionSeats from './TrainSelectionSeats';
import './train-selection.css';

function TrainSelection() {
	return (

		<>
		{/* ВАЖНО!!!!!
			Активировать кнопку "choice-train__btn" или "order__route-btn" */}
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
					<TrainSelectionSeats />
					{/* <div className="train__ticket">
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
					</div> */}
				</div>
				<div className="train__amenities">
					<span className="train__amenities-wifi** amenities-wifi__includes"></span>
					<span className="train__amenities-express** amenities-express__includes"></span>
					<span className="train__amenities-coffee** amenities-coffee__includes"></span>
				</div>
				<button className="choice-train__btn" type="button">Выбрать места</button>
				{/* <button type="button" className="order__route-btn">Изменить</button> */}
			</div>
		</article>
		</>
	)
}

export default TrainSelection;