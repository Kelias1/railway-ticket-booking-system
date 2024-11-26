import './train-selection.css';

function TrainSelectionSeats() {
	return (
		<>
		{/* ВАЖНО!!!!!
			Активировать кнопку "hide-section" или "seat__up-show" Класс со звездочками отключен. */}
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
					<div className="hide-section seat__up-show**">
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
		</>
	)
}

export default TrainSelectionSeats