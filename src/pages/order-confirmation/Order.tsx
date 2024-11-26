import TrainSelection from '../../components/train-selection/TrainSelection';
import './order.css';

function Order() {
	return (
		<div className='order'>
			<div className='order__route'>
				<h2 className='order__route-title'>Поезд</h2>
				<TrainSelection />
			</div>

			<div className='order__passengers'>
				<h2 className='order__passenger-title'>Пассажиры</h2>
				<div className='order__passenger-container'>
					<div className='passengers__container-list'>
						<div className='passengers__container-item'>
							<div className='passenger__container-avatar'>
								<span className='passenger__container-img'></span>
								<p className='passenger__container-ages'>Взрослый</p>
							</div>
							<div className='passenger__container-data'>
								<p className='passenger__container-name'>Мартынюк Ирина Эдуардовна</p>
								<p className='passenger__container-gender'>Пол женский</p>
								<p className='passenger__container-birth'>Дата рождения 17.02.1985</p>
								<p className='passenger__container-docs'>Паспорт РФ 4204 380694</p>
							</div>
						</div>

						<div className='passengers__container-item'>
							<div className='passenger__container-avatar'>
								<span className='passenger__container-img'></span>
								<p className='passenger__container-ages'>Детский</p>
							</div>
							<div className='passenger__container-data'>
								<p className='passenger__container-name'>Мартынюк Кирилл Сергеевич</p>
								<p className='passenger__container-gender'>Пол мужской</p>
								<p className='passenger__container-birth'>Дата рождения 25.01.2006</p>
								<p className='passenger__container-docs'>Свидетельство о рождении VIII УН 256319</p>
							</div>
						</div>

						<div className='passengers__container-item'>
							<div className='passenger__container-avatar'>
								<span className='passenger__container-img'></span>
								<p className='passenger__container-ages'>Взрослый</p>
							</div>
							<div className='passenger__container-data'>
								<p className='passenger__container-name'>Мартынюк Сергей Петрович</p>
								<p className='passenger__container-gender'>Пол мужской</p>
								<p className='passenger__container-birth'>Дата рождения 19.06.1982</p>
								<p className='passenger__container-docs'>Паспорт РФ 4204 380694</p>
							</div>
						</div>
					</div>					
					<div className='passenger__container-change'>
						<div className='passenger__container-total'>
							<p>Всего</p>
							<div className='passenger__container-price'>
								<p>7 760</p>
								<span className='details__total-currency-symbol'></span>
							</div>
						</div>
						<button className='passenger__container-btn'>Изменить</button>
					</div>
				</div>
			</div>

			<div className='order__payment'>
				<h2 className='order__payment-title'>Способ оплаты</h2>
				<div className='order__payment-method'>
					<p className='order__payment-text'>Наличными</p>
					<button className='order__payment-btn' type='button'>Изменить</button>
				</div>
			</div>

			<button className='order__btn' type='button'>подтвердить</button>
		</div>
	)
}

export default Order;