import SearchCity from './SearchCity';
import SearchDate from './SearchDate';
import './searchWidget.css';

function SearchWidget() {
	return (
		<>
		{/* ВАЖНО!!!!!

		Здесь нужно выбрать класс search__widget или search__widget-choice в зависимости от этапа покупки. Класс со звездочками отключен. Класс search__widget предназначен для начальной стадии страницы */}
		<div className="search__widget search__widget-choice**">
			<div className="hide-section">
				<p>Введите пункты направления!</p>
			</div>
			<div className="search__inputs">
				<SearchCity />
				<SearchDate />
			</div>
			<button className="search__btn" type="button">найти билеты</button>
		</div>
		</>
	)
}

export default SearchWidget;