// import Calendar from '../calendar/Calendar';
import './searchWidget.css';

function SearchDate() {
	return (
		<>
		{/* ВАЖНО!!!!!

		Для просмотра календаря необходимо активировать компонент Calendar. No olvidar borrar la apertura y cierre del div vacio */}
		<div className="search__date">
			<p className="search__date-text">Дата</p>
			<div className="search__date-inputs">
				<input type="text" className="date__input-from" placeholder="ДД.ММ.ГГ" value="" />
				{/* <Calendar /> */}
				<input type="text" className="date__input-to" placeholder="ДД.ММ.ГГ" value="" />
			</div>
		</div>
		</>
	)
}

export default SearchDate