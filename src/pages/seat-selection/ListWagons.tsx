import TypeWagon from './components/TypeWagon';
import './list-wagons.css';

function ListWagons() {
	return (
		<div className='wagons'>
			<h2 className='wagons__title'>выбор мест</h2>
			<TypeWagon />
			<button className='wagon__button wagon__button-disable**' type='button'>далее</button>
		</div>
	)
}

export default ListWagons;