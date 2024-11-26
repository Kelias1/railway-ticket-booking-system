import '../passengers-list.css';

function Passenger() {
	return (
		<div className='passenger'>
			<header className='passenger__header'>
				<span className='passenger__header-up'></span>
				<h2 className='passenger__header-title'>Пассажир 1</h2>
				<span className='passenger__header-close'></span>
			</header>

			<div className='passenger__main'>
				<div className='passenger__choice-age'>
					<div className='passenger__select'>Взрослый</div>
					<div className='list__age-select'>
					<div className='select__adult'>Детский</div>
					<div className='select__child'>Взрослый</div>
					</div>
				</div>

				<div className='passenger__form-names'>
					<label className='passenger__name-label'>
						<p>Фамилия</p>
						<input
							className='passenger__name-input'
							type="text"
							required
						/>
					</label>
					<label className='passenger__name-label'>
						<p>Имя</p>
						<input
							className='passenger__name-input'
							type="text"
							required
						/>
					</label>
					<label className='passenger__name-label'>
						<p>Отчество</p>
						<input
							className='passenger__name-input'
							type="text"
							required
						/>
					</label>
				</div>

				<div className='passenger__form-birth'>
					<div className='passenger__choice-gender'>
						<p className='choice__gender-text'>Пол</p>
						<div className='choice__gender'>
							<p className='gender__choice-color'>м</p>
							<p className='passenger__gender'>ж</p>
						</div>
					</div>
					<div className='passenger__birth-date'>
						<label className='passenger__birth-label'>
							<p>Дата рождения</p>
							<input
								className='passenger__birth-input'
								type="text"
								placeholder='ДД.ММ.ГГ'
								required
							/>
						</label>
					</div>
				</div>

				<div className='passenger__form-check'>
					<div className='passenger__check-input'></div>
					<p className='passenger__check-text'>ограниченная подвижность</p>
				</div>

				<div className='passenger__form-docs'>
					<div className='passenger__docs-select'>
						<p>Тип документа</p>
						<div className='select__docs'>Паспорт РФ</div>
						<div className='list__docs-select'>
							<div className='select__doc-passport'>Паспорт РФ</div>
							<div className='select__doc-birth'>Свидетельство о рождении</div>
						</div>
					</div>
					<div className='passenger__docs-series'>
						<label className='docs__series-label'>
							<p>Серия</p>
							<input
								className='docs__series-input'
								type="text"
								required
								placeholder='__  __  __  __' />
						</label>
					</div>
					<div className='passenger__docs-number'>
						<label className='docs__number-label'>
							<p>Номер</p>
							<input
								className='docs__number-input'
								type="text"
								required
								placeholder='__  __  __  __  __  __' />
						</label>
					</div>
					{/* <div className='passenger__docs-birth'>
						<label className='docs__birth-label'>
							<p>Номер</p>
							<input
								className='docs__birth-input'
								type="text"
								required
								placeholder='_ _ _ _ _ _ _ _ _ _ _ _' />
						</label>
					</div> */}
				</div>

				<div className='passenger__footer-ok passenger__footer**'>
					<span className='passenger__valid-ok none'></span>
					<p className='passenger__valid-text-ok none'>Готово</p>
					<button className='passenger__button none' type='button' disabled>Следующий пассажир</button>
				</div>
			</div>
		</div>
	)
}

export default Passenger;