import './calendar.css';

function Calendar() {
	return (
		<div className="calendar__from filter__calendar-from">
			<div className="calendar__linker"></div>
			<div className="calendar__container">
				<div className="calendar__month">
					<button className="prev__month" type="button"></button>
					<p className="calendar__month-desc">август</p>
					<button className="next__month" type="button"></button>
				</div>
				<div className="calendar__date">
				    <div className="date__other-month">29</div>
				    <div className="date__other-month">30</div>
				    <div className="date__other-month">31</div>
				    <div className="date__current-month">1</div>
				    <div className="date__current-month">2</div>
				    <div className="date__current-month">3</div>
				    <div className="date__current-month">4</div>
				    <div className="date__current-month">5</div>
				    <div className="date__current-month">6</div>
				    <div className="date__current-month">7</div>
				    <div className="date__current-month">8</div>
				    <div className="date__current-month">9</div>
				    <div className="date__current-month">10</div>
				    <div className="date__current-month">11</div>
				    <div className="date__current-month">12</div>
				    <div className="date__current-month">13</div>
				    <div className="date__current-month">14</div>
				    <div className="date__current-month">15</div>
				    <div className="date__current-month">16</div>
				    <div className="date__current-month">17</div>
				    <div className="date__current-month date__today">18</div>
				    <div className="date__current-month">19</div>
				    <div className="date__current-month">20</div>
				    <div className="date__current-month">21</div>
				    <div className="date__current-month">22</div>
				    <div className="date__current-month">23</div>
				    <div className="date__current-month">24</div>
				    <div className="date__current-month">25</div>
				    <div className="date__current-month">26</div>
				    <div className="date__current-month">27</div>
				    <div className="date__current-month">28</div>
				    <div className="date__current-month">29</div>
				    <div className="date__current-month">30</div>
				    <div className="date__other-month">1</div>
				    <div className="date__other-month">2</div>
		  		</div>
			</div>
		</div>
	)
}

export default Calendar;