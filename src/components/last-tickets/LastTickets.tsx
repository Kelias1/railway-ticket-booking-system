import './last-tickets.css';

function LastTickets() {
	return (
		<aside className="siderbar__last-tickets">
			<h3 className="last-tickets__title">последние билеты</h3>
			<ul className="last-tickets__list">
				<li className="last-tickets__list-item">
					<div className="item__from-to">
						<div className="item__from">
							<p className="item__city">санкт петербург</p>
							<p className="item__station">
								Курский <br />
								вокзал
							</p>
						</div>
						<div className="item__to">
							<p className="item__city">Самара</p>
							<p className="item__station">
								Московский <br />
								вокзал
							</p>
						</div>
					</div>
					<div className="item__amenities-price">
						<div className="item__amenities"></div>
						<div className="item__start-price">
							<p className="price__start-text">от</p>
							<p className="price__start-value">2 500</p>
							<span className="currency-symbol"></span>
						</div>
					</div>
				</li>
				<li className="last-tickets__list-item">
					<div className="item__from-to">
						<div className="item__from">
							<p className="item__city">Москва</p>
							<p className="item__station">
								Курский <br />
								вокзал
							</p>
						</div>
						<div className="item__to">
							<p className="item__city">Казань</p>
							<p className="item__station">
								Московский <br />
								вокзал
							</p>
						</div>
					</div>
					<div className="item__amenities-price">
						<div className="item__amenities"></div>
						<div className="item__start-price">
							<p className="price__start-text">от</p>
							<p className="price__start-value">3 500</p>
							<span className="currency-symbol"></span>
						</div>
					</div>
				</li>
				<li className="last-tickets__list-item">
					<div className="item__from-to">
						<div className="item__from">
							<p className="item__city">Казань</p>
							<p className="item__station">
								Курский <br />
								вокзал
							</p>
						</div>
						<div className="item__to">
							<p className="item__city">Нижний новгород</p>
							<p className="item__station">
								Московский <br />
								вокзал
							</p>
						</div>
					</div>
					<div className="item__amenities-price">
						<div className="item__amenities"></div>
						<div className="item__start-price">
							<p className="price__start-text">от</p>
							<p className="price__start-value">3 800</p>
							<span className="currency-symbol"></span>
						</div>
					</div>
				</li>
			</ul>
		</aside>
	)
}

export default LastTickets