import Wagon from './Wagon';
import '../list-wagons.css';

function TypeWagon() {
	return (
		<>
			{/* VAGON LUX */}
			{/* <div className='wagon'>
				<div className='choice__train-departure'>
					<span className='choice__train-departure-img'></span>
					<button className='choice__train-btn' type='button'>Выбрать другой поезд</button>
				</div>

				<div className='wagon__train'>
					<div className='wagon__train-route'>
						<span className='wagon__train-img'></span>
						<div className='wagon__train-description'>
							<h3 className='train__description-name'>116С
							</h3>
							<p className='train__description-city'>Адлер →</p>
							<p className='train__description-city'>Москва →</p>
							<p className='train__description-city'>Санкт-Петербург</p>
						</div>
					</div>

					<div className='wagon__direction-time'>
						<div className='wagon__direction-city'>
							<h3 className='wagon__time'>00:10</h3>
							<p className='wagon__direction-name'>Москва</p>
							<p className='wagon__direction-station'>Курский вокзал</p>
						</div>
						<div className='direction__arrow'></div>
						<div className='wagon__direction-city-arrival'>
							<h3 className='wagon__time'>09:52</h3>
							<p className='wagon__direction-name'>Санкт-Петербург</p>
							<p className='wagon__direction-station'>Ладожский вокзал</p>
						</div>
					</div>

					<div className='wagon__duration'>
						<span className='wagon__duration-img'></span>
						<div className='wagon__duration-text'>
							<p>9 часов</p>
							<p>42 минуты</p>
						</div>
					</div>
				</div>

				<div className='amount__tickets'>
					<h3 className='amount__tickets-title'>Количество билетов</h3>
					<div className='tickets__age'>
						<div className='tickets__age-inputs tickets__age-adults'>
							<input className='tickets__age-input' type="text" placeholder="Взрослых — 2" />
							<p className='tickets__adults-description'>Можно добавить еще <br /> 3 пассажиров</p>
						</div>

						<div className='tickets__age-inputs'>
							<input className='tickets__age-input' type="text" placeholder="Детских — 1" />
							<p className='tickets__adults-description'>Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле <br /> в среднем на 50-65%</p>
						</div>
						<div className='tickets__age-inputs'>
							<input className='tickets__age-input' type="text" placeholder="Детских «без места» — 0" />
						</div>
					</div>
				</div>

				<div className='wagons__types'>
					<h3 className='wagon__type-title'>Тип вагона</h3>
					<div className='wagon__types'>
						<div className='wagon__type'>
							<span className='type__economy-img'></span>
							<p className='type__text'>Сидячий</p>
						</div>
						<div className='wagon__type'>
							<span className='type__platzkart-img'></span>
							<p className='type__text'>Плацкарт</p>
						</div>
						<div className='wagon__type'>
							<span className='type__coupe-img'></span>
							<p className='type__text'>Купе</p>
						</div>
						<div className='wagon__type'>
							<span className='type__lux-img** type__lux-img-active'></span>
							<p className='type__text** type__text-active'>Люкс</p>
						</div>
					</div>

					<div className='wagons__numbers-wrap'>
						<div className='wagons__numbers'>
							<p className='wagons__numbers-title'>Вагоны</p><span className='wagons__numbers-current'>02 05</span>
						</div>
						<p className='wagons__numbers-text'>Нумерация вагонов начинается с головы поезда</p>
					</div>
					<Wagon />
				</div>
				<div className="hide-section">
					0
					<span className="currency-symbol"></span>
				</div>
			</div> */}
			{/* VAGON COUPE */}
			{/* <div className='wagon'>
				<div className='choice__train-departure'>
					<span className='choice__train-departure-img'></span>
					<button className='choice__train-btn' type='button'>Выбрать другой поезд</button>
				</div>

				<div className='wagon__train'>
					<div className='wagon__train-route'>
						<span className='wagon__train-img'></span>
						<div className='wagon__train-description'>
							<h3 className='train__description-name'>116С
							</h3>
							<p className='train__description-city'>Адлер →</p>
							<p className='train__description-city'>Москва →</p>
							<p className='train__description-city'>Санкт-Петербург</p>
						</div>
					</div>

					<div className='wagon__direction-time'>
						<div className='wagon__direction-city'>
							<h3 className='wagon__time'>00:10</h3>
							<p className='wagon__direction-name'>Москва</p>
							<p className='wagon__direction-station'>Курский вокзал</p>
						</div>
						<div className='direction__arrow'></div>
						<div className='wagon__direction-city-arrival'>
							<h3 className='wagon__time'>09:52</h3>
							<p className='wagon__direction-name'>Санкт-Петербург</p>
							<p className='wagon__direction-station'>Ладожский вокзал</p>
						</div>
					</div>

					<div className='wagon__duration'>
						<span className='wagon__duration-img'></span>
						<div className='wagon__duration-text'>
							<p>9 часов</p>
							<p>42 минуты</p>
						</div>
					</div>
				</div>

				<div className='amount__tickets'>
					<h3 className='amount__tickets-title'>Количество билетов</h3>
					<div className='tickets__age'>
						<div className='tickets__age-inputs tickets__age-adults'>
							<input className='tickets__age-input' type="text" placeholder="Взрослых — 2" />
							<p className='tickets__adults-description'>Можно добавить еще <br />3 пассажиров</p>
						</div>

						<div className='tickets__age-inputs'>
							<input className='tickets__age-input' type="text" placeholder="Детских — 1" />
							<p className='tickets__adults-description'>Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
								в среднем на 50-65%</p>
						</div>
						<div className='tickets__age-inputs'>
							<input className='tickets__age-input' type="text" placeholder="Детских «без места» — 0" />
						</div>
					</div>
				</div>

				<div className='wagons__types'>
					<h3 className='wagon__type-title'>Тип вагона</h3>
					<div className='wagon__types'>
						<div className='wagon__type'>
							<span className='type__economy-img'></span>
							<p className='type__text'>Сидячий</p>
						</div>
						<div className='wagon__type'>
							<span className='type__platzkart-img'></span>
							<p className='type__text'>Плацкарт</p>
						</div>
						<div className='wagon__type'>
							<span className='type__coupe-img** type__coupe-img-active'></span>
							<p className='type__text** type__text-active'>Купе</p>
						</div>
						<div className='wagon__type'>
							<span className='type__lux-img'></span>
							<p className='type__text'>Люкс</p>
						</div>
					</div>

					<div className='wagons__numbers-wrap'>
						<div className='wagons__numbers'>
							<p className='wagons__numbers-text'>Вагоны</p><span className='wagons__numbers-current'>07 09</span>
						</div>
						<p className='wagons__numbers-text'>Нумерация вагонов начинается с головы поезда</p>
					</div>
				<Wagon />
				</div>
				<div className="hide-section total__price**">
					0
					<span className="currency-symbol"></span>
				</div>
			</div> */}
			{/* VAGON PLATZKART */}
			<div className='wagon'>
				<div className='choice__train-departure'>
					<span className='choice__train-departure-img'></span>
					<button className='choice__train-btn' type='button'>Выбрать другой поезд</button>
				</div>

				<div className='wagon__train'>
					<div className='wagon__train-route'>
						<span className='wagon__train-img'></span>
						<div className='wagon__train-description'>
							<h3 className='train__description-name'>116С
							</h3>
							<p className='train__description-city'>Адлер →</p>
							<p className='train__description-city'>Москва →</p>
							<p className='train__description-city'>Санкт-Петербург</p>
						</div>
					</div>

					<div className='wagon__direction-time'>
						<div className='wagon__direction-city'>
							<h3 className='wagon__time'>00:10</h3>
							<p className='wagon__direction-name'>Москва</p>
							<p className='wagon__direction-station'>Курский вокзал</p>
						</div>
						<div className='direction__arrow'></div>
						<div className='wagon__direction-city-arrival'>
							<h3 className='wagon__time'>09:52</h3>
							<p className='wagon__direction-name'>Санкт-Петербург</p>
							<p className='wagon__direction-station'>Ладожский вокзал</p>
						</div>
					</div>

					<div className='wagon__duration'>
						<span className='wagon__duration-img'></span>
						<div className='wagon__duration-text'>
							<p>9 часов</p>
							<p>42 минуты</p>
						</div>
					</div>
				</div>

				<div className='amount__tickets'>
					<h3 className='amount__tickets-title'>Количество билетов</h3>
					<div className='tickets__age'>
						<div className='tickets__age-inputs tickets__age-adults'>
							<input className='tickets__age-input' type="text" placeholder="Взрослых — 2" />
							<p className='tickets__adults-description'>Можно добавить еще <br />3 пассажиров</p>
						</div>

						<div className='tickets__age-inputs'>
							<input className='tickets__age-input' type="text" placeholder="Детских — 1" />
							<p className='tickets__adults-description'>Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
								в среднем на 50-65%</p>
						</div>
						<div className='tickets__age-inputs'>
							<input className='tickets__age-input' type="text" placeholder="Детских «без места» — 0" />
						</div>
					</div>
				</div>

				<div className='wagons__types'>
					<h3 className='wagon__type-title'>Тип вагона</h3>
					<div className='wagon__types'>
						<div className='wagon__type'>
							<span className='type__economy-img'></span>
							<p className='type__text'>Сидячий</p>
						</div>
						<div className='wagon__type'>
							<span className='type__platzkart-img** type__platzkart-img-active'></span>
							<p className='type__text** type__text-active'>Плацкарт</p>
						</div>
						<div className='wagon__type'>
							<span className='type__coupe-img'></span>
							<p className='type__text'>Купе</p>
						</div>
						<div className='wagon__type'>
							<span className='type__lux-img'></span>
							<p className='type__text'>Люкс</p>
						</div>
					</div>

					<div className='wagons__numbers-wrap'>
						<div className='wagons__numbers'>
							<p className='wagons__numbers-title'>Вагоны</p><span className='wagons__numbers-current'>10 12 15</span>
						</div>
						<p className='wagons__numbers-text'>Нумерация вагонов начинается с головы поезда</p>
					</div>
					{/* <Wagon /> */}
				</div>
				<div className="hide-section** total__price">
					8 080
					<span className="currency-symbol"></span>
				</div>
			</div>
			{/* VAGON ECONOMICO */}
			<div className='wagon'>
				<div className='choice__train-return'>
					<span className='choice__train-return-img'></span>
					<button className='choice__train-btn' type='button'>Выбрать другой поезд</button>
				</div>

				<div className='wagon__train'>
					<div className='wagon__train-route'>
						<span className='wagon__train-img'></span>
						<div className='wagon__train-description'>
							<h3 className='train__description-name'>116С
							</h3>
							<p className='train__description-city'>Адлер →</p>
							<p className='train__description-city'>Москва →</p>
							<p className='train__description-city'>Санкт-Петербург</p>
						</div>
					</div>

					<div className='wagon__direction-time'>
						<div className='wagon__direction-city'>
							<h3 className='wagon__time'>00:10</h3>
							<p className='wagon__direction-name'>Москва</p>
							<p className='wagon__direction-station'>Курский вокзал</p>
						</div>
						<div className='direction__arrow'></div>
						<div className='wagon__direction-city-arrival'>
							<h3 className='wagon__time'>09:52</h3>
							<p className='wagon__direction-name'>Санкт-Петербург</p>
							<p className='wagon__direction-station'>Ладожский вокзал</p>
						</div>
					</div>

					<div className='wagon__duration'>
						<span className='wagon__duration-img'></span>
						<div className='wagon__duration-text'>
							<p>9 часов</p>
							<p>42 минуты</p>
						</div>
					</div>
				</div>

				<div className='amount__tickets'>
					<h3 className='amount__tickets-title'>Количество билетов</h3>
					<div className='tickets__age'>
						<div className='tickets__age-inputs tickets__age-adults'>
							<input className='tickets__age-input' type="text" placeholder="Взрослых — 2" />
							<p className='tickets__adults-description'>Можно добавить еще <br /> 3 пассажиров</p>
						</div>

						<div className='tickets__age-inputs'>
							<input className='tickets__age-input' type="text" placeholder="Детских — 0" />
							<p className='tickets__adults-description'>Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле
								в среднем на 50-65%</p>
						</div>
						<div className='tickets__age-inputs'>
							<input className='tickets__age-input' type="text" placeholder="Детских «без места» — 0" />
						</div>
					</div>
				</div>

				<div className='wagons__types'>
					<h3 className='wagon__type-title'>Тип вагона</h3>
					<div className='wagon__types'>
						<div className='wagon__type'>
							<span className='type__economy-img** type__economy-img-active'></span>
							<p className='type__text** type__text-active'>Сидячий</p>
						</div>
						<div className='wagon__type'>
							<span className='type__platzkart-img'></span>
							<p className='type__text'>Плацкарт</p>
						</div>
						<div className='wagon__type'>
							<span className='type__coupe-img'></span>
							<p className='type__text'>Купе</p>
						</div>
						<div className='wagon__type'>
							<span className='type__lux-img'></span>
							<p className='type__text'>Люкс</p>
						</div>
					</div>

					<div className='wagons__numbers-wrap'>
						<div className='wagons__numbers'>
							<p className='wagons__numbers-title'>Вагоны</p><span className='wagons__numbers-current'>20 21 22 25</span>
						</div>
						<p className='wagons__numbers-text'>Нумерация вагонов начинается с головы поезда</p>
					</div>
					<Wagon />
				</div>
				<div className="hide-section** total__price">5 760<span className="currency-symbol"></span>
				</div>
			</div>
		</>
	)
}

export default TypeWagon;