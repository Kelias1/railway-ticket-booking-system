import './searchWidget.css';

function SearchCity() {
	return (
		<div className="search__direction">
			<p className="search__direction-text">Направление</p>
			<div className="search__direction-inputs">
				<input type="text" className="direction__input-from" placeholder="Откуда" value="" />
				<button className="direction__btn" type="button"></button>
				<input type="text" className="direction__input-to" placeholder="Куда" value="" />
				<div className="hide-section">
					<div className="city__list">
						<div className="dots__list">
							<div className="dots__list-absolute">
								<div className="loader"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchCity;