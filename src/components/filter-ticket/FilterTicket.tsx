import Calendar from '../calendar/Calendar';
import './filter-ticket.css';

function FilterTicket() {
	return (
		<aside className="sidebar__filter">
			<div className="filter__date">
				<div className="filter__date-from">
					<p className="filter__date-title">
						Дата поездки
					</p>
					<input className="date__input-from" type="text" placeholder="ДД.ММ.ГГ" value="" />
					<Calendar />
					<div className="filter__date-to">
						<p className="filter__date-title">
							Дата возвращения
						</p>
						<input type="text" placeholder="ДД.ММ.ГГ" value="" />
					</div>
				</div>
			</div>
			<div className="filter__line"></div>
			<div className="filter__checkbox">
				<div className="checkbox__coupe">
					<span className="coupe__img"></span>
					<p className="checkbox__text">Купе</p>
					<div className="check__element check__true">
						<input className="checkbox__input" type="checkbox" />
					</div>
				</div>
				<div className="checkbox__couchette-car">
					<span className="couchette-car__img"></span>
					<p className="checkbox__text">Плацкарт</p>
					<div className="check__element check__false">
						<input className="checkbox__input" type="checkbox" />
					</div>
				</div>
				<div className="checkbox__seat">
					<span className="seat__img"></span>
					<p className="checkbox__text">Сидячий</p>
					<div className="check__element check__false">
						<input className="checkbox__input" type="checkbox" />
					</div>
				</div>
				<div className="checkbox__lux">
					<span className="lux__img"></span>
					<p className="checkbox__text">Люкс</p>
					<div className="check__element check__false">
						<input className="checkbox__input" type="checkbox" />
					</div>
				</div>
				<div className="checkbox__wifi">
					<span className="wifi__img"></span>
					<p className="checkbox__text">Wi-Fi</p>
					<div className="check__element check__true">
						<input className="checkbox__input" type="checkbox" />
					</div>
				</div>
				<div className="checkbox__express">
					<span className="express__img"></span>
					<p className="checkbox__text">Экспресс</p>
					<div className="check__element check__false">
						<input className="checkbox__input" type="checkbox" />
					</div>
				</div>
			</div>
			<div className="filter__line"></div>
			<div className="filter__price">
				<p className="filter__price-title">Стоимость</p>
				<div className="price__range">
					<div className="price__range-text">
						<p>от</p>
						<p>до</p>
					</div>
					<div className="range__input">
						<input type="range" min="0" max="7000" className="range__input-in" value="0" wfd-id="id17" />
						<input type="range" min="0" max="7000" className="range__input-out" value="7000" wfd-id="id18" />
						<div className="range__line">
							<div className="range__line-body" style={{ left: "0%", right: "52%" }}></div>
						</div>
					</div>
					<div className="price__range-number">
						<p className="price__min">0</p>
						<p className="price__start">0</p>
						<p className="price__end" style={{ marginRight: "150px" }}>4500</p>
						<p className="price__max">7000</p>
					</div>
				</div>
			</div>
			<div className="filter__line"></div>
			<div className="filter__departure-date">
				<div className="filter__travel-date-title">
					<span className="filter__departure-date-img"></span>
					<p className="filter__travel-date-text">Туда</p>
					<span className="filter__date-close-down"></span>
				</div>
				<div className="hide-section">
					<div className="travel-date__range-departure">
						<div className="travel-date__range-text">Время отбытия</div>
						<div className="range__input-travel-dates">
							<input className="range__input-date-in" type="range" min="0" max="86400" value="0" />
							<input className="range__input-date-out" type="range" min="0" max="86400" value="86400" />
							<div className="range__travel-date-line">
								<div className="range__date-line-body" style={{ left: "0%", right: "0%" }}></div>
							</div>
						</div>
						<div className="travel-date__range-number">
							<p className="travel-date__min">00:00</p>
							<p className="travel-date__start" style={{ marginLeft: "0px" }}>00:00</p>
							<p className="travel-date__end" style={{ marginRight: "0px" }}>24:00</p>
							<p className="travel-date__max">24:00</p>
						</div>
					</div>
					<div className="travel-date__range-departure">
						<div className="travel-date__range-text">
							<p className="text__arrival">Время прибытия</p>
						</div>
						<div className="range__input-travel-dates">
							<input className="range__input-date-in" type="range" min="0" max="86400" value="0" />
							<input className="range__input-date-out" type="range" min="0" max="86400" value="86400" />
							<div className="range__travel-date-line">
								<div className="range__date-line-body" style={{ left: "0%", right: "0%" }}></div>
							</div>
						</div>
						<div className="travel-date__range-number">
							<p className="travel-date__min">00:00</p>
							<p className="travel-date__start" style={{ marginLeft: "0px" }}>00:00</p>
							<p className="travel-date__end" style={{ marginRight: "0px" }}>24:00</p>
							<p className="travel-date__max">24:00</p>
						</div>
					</div>
				</div>
			</div>
			<div className="filter__line"></div>
			<div className="filter__return-date">
				<div className="filter__travel-date-title">
					<span className="filter__return-date-img"></span>
					<p className="filter__travel-date-text">Обратно</p>
					<span className="filter__date-close-down"></span>
				</div>
				<div className="hide-section">
					<div className="travel-date__range-return">
						<div className="travel-date__range-text">Время отбытия</div>
						<div className="range__input-travel-dates">
							<input className="range__input-date-in" type="range" min="0" max="86400" value="0" />
							<input className="range__input-date-out" type="range" min="0" max="86400" value="86400" />
							<div className="range__travel-date-line">
								<div className="range__date-line-body" style={{ left: "0%", right: "0%" }}></div>
							</div>
						</div>
						<div className="travel-date__range-number">
							<p className="travel-date__min">00:00</p>
							<p className="travel-date__start" style={{ marginLeft: "0px" }}>00:00</p>
							<p className="travel-date__end" style={{ marginRight: "0px" }}>24:00</p>
							<p className="travel-date__max">24:00</p>
						</div>
					</div>
					<div className="travel-date__range-return">
						<div className="travel-date__range-text">
							<p className="text__arrival">Время прибытия</p>
						</div>
						<div className="range__input-travel-dates">
							<input className="range__input-date-in" type="range" min="0" max="86400" value="0" />
							<input className="range__input-date-out" type="range" min="0" max="86400" value="86400" />
							<div className="range__travel-date-line">
								<div className="range__date-line-body" style={{ left: "0%", right: "0%" }}></div>
							</div>
						</div>
						<div className="travel-date__range-number">
							<p className="travel-date__min">00:00</p>
							<p className="travel-date__start" style={{ marginLeft: "0px" }}>00:00</p>
							<p className="travel-date__end" style={{ marginRight: "0px" }}>24:00</p>
							<p className="travel-date__max">24:00</p>
						</div>
					</div>
				</div>
			</div>
		</aside>
	)
}

export default FilterTicket;