import Passenger from './components/Passenger';
import './passengers-list.css';

function PassengersList() {
	return (
		<div className='list__passengers'>
			<Passenger />
			<Passenger />
      <div className='add__passengers'>
        <h2 className='add__passenger-title'>Добавить пассажира</h2>
        <span className='add__passenger-img'></span>
      </div>
      <button className='list__passenger-btn-ok** list__passenger-btn' type='button'>Далее</button>
    </div>
	)
}

export default PassengersList;