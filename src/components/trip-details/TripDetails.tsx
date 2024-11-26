import './trip-details.css';

function TripDetails() {
	return (
		<div className='sidebar__trip-details'>

			<div className='details__title'>
				<h2 className='details__title-text'>детали поездки</h2>
			</div>

			<div className='details__departure'>
				<div className='details__departure-head'>
					<span className='departure__head-img'></span>
					<h3 className='details__head-title'>Туда</h3>
					<div className='departure__head-date'>30.08.2018</div>
					<span className='details__head-open pass__head-open-down** pass__head-open-up**'></span>
				</div>

				<div>
					<div className='details__train-number'>
						<p className='details__train-title'>№ Поезда</p>
						<p className='departure__train-number'>116С</p>
					</div>

					<div className='details__train-name'>
						<p className='details__train-title'>Название</p>
						<p className='departure__train-text'>Адлер <br />
							Санкт-Петербург
						</p>
					</div>

					<div className='details__wrap'>
						<div className='details__left-column'>
							<div className='departure__time'>00:10</div>
							<div className='departure__date'>30.08.2018</div>
							<div className='details__city-wrap'>
								<p className='departure__city'>Москва</p>
								<p className='departure__station'>Курский</p>
								<p className='details__station'>вокзал</p>
							</div>
						</div>
						<div className='details__arrow'>
							<p className='departure__travel-time'>9 : 42</p>
							<span className='departure__direction-arrow'></span>
						</div>
						<div className='details__right-column'>
							<div className='departure__time'>09:52</div>
							<div className='departure__date'>31.08.2018</div>
							<div className='details__city-wrap'>
								<p className='departure__city'>Санкт-Петербург</p>
								<p className='departure__station'>Ладожский</p>
								<p className='details__station'>вокзал</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='details__line'></div>

			<div className='details__return'>
			<div className='details__return-head'>
          <span className='return__head-img'></span>
          <h3 className='details__head-title'>Обратно</h3>
          <div className='departure__head-date'>09.09.2018</div>
          <span className='details__head-open pass__head-open-down** pass__head-open-up**'></span>
        </div>

        <div>
          <div className='details__train-number'>
            <p className='details__train-title'>№ Поезда</p>
            <p className='departure__train-number'>116С</p>
          </div>

          <div className='details__train-name'>
            <p className='details__train-title'>Название</p>
            <p className='departure__train-text'>Адлер <br />
						Санкт-Петербург
						</p>
          </div>

          <div className='details__wrap'>
            <div className='details__left-column'>
              <div className='departure__time'>00:10</div>
              <div className='departure__date'>30.08.2018</div>
              <div className='details__city-wrap'>
                <p className='departure__city'>Москва</p>
                <p className='departure__station'>Курский</p>
                <p className='details__station'>вокзал</p>
              </div>
            </div>
            <div className='details__arrow'>
              <p className='departure__travel-time'>9 : 42</p>
              <span className='return__direction-arrow'></span>
            </div>
            <div className='details__right-column'>
              <div className='departure__time'>09:52</div>
              <div className='departure__date'>31.08.2018</div>
              <div className='details__city-wrap'>
                <p className='departure__city'>Санкт-Петербург</p>
                <p className='departure__station'>Ладожский</p>
                <p className='details__station'>вокзал</p>
              </div>
            </div>
          </div>
        </div>
			</div>
			<div className='details__line'></div>
			<div className='details__passengers'>
				<div className='details__passengers-head'>
					<span className='passenger__head-img'></span>
					<h3 className='passenger__head-title'>Пассажиры</h3>
					<span className='passenger__head-open-down passenger__head-open-up**'></span>
				</div>

				<div>
					<div className='passenger__amount-price'>
						<div className='passenger__amount'>
							<p className='amount'>2</p>
							<p className='passenger__age'>Взрослых</p>
						</div>
						<div className='passenger__price'>
							<p className='passenger__price-text'>5 840</p>
							<span className='passenger__currency-symbol'></span>
						</div>
					</div>
					<div className='passenger__amount-price'>
						<div className='passenger__amount'>
							<p className='amount'>1</p>
							<p className='passenger__age'>Ребенок</p>
						</div>
						<div className='passenger__price'>
							<p className='passenger__price-text'>1 920</p>
							<span className='passenger__currency-symbol'></span>
						</div>
					</div>
				</div>
			</div>

			<div className='details__line'></div>

			<div className='details__total'>
				<div className='details__total-line'>
					<p className='details__total-text'>итог</p>
					<p className='total__price-text'>7 760</p>
					<span className='details__total-currency-symbol'></span>
				</div>
			</div>
		</div>
	)
}

export default TripDetails;