import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Reviews from '../../components/reviews/Reviews';
// import ChooseTicket from '../choose-ticket/ChooseTicket';
// import OrderComplete from '../order-complete/OrderComplete';
import './main.css';

function Main() {
	return (
		<div className='container container__main__sidebar**'>
			<main className="main main-sidebar**">
				<About />
				<HowItWorks />
				<Reviews />
				{/* <ChooseTicket /> */}
				{/* <OrderComplete /> */}
			</main>
		</div>
	)
}

export default Main;