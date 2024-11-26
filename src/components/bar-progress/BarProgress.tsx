import './bar-progress.css';

export default function BarProgress() {
	return (
		<div className="bar__progress-section ">
				<div className="bar__progress-wrap">
						<div className="start__steps current__step"></div>
						<div className="arrow "></div>
					<div className="progress__step-one current__step ">
						<div className="step__number current__step">
							<p>1</p>
						</div>
						<div className="step__desc current__step">Билеты</div>
						<div className="step__arrow step__arrow-one ">
							<div className="arrow__top current__step"></div>
							<div className="arrow__bottom current__step"></div>
						</div>
					</div>
				<div className="progress__step-two ">
					<div className="step__number ">
						<p>2</p>
					</div>
					<div className="step__desc ">Пассажиры</div>
					<div className="step__arrow step__arrow-two ">
						<div className="arrow__top "></div>
						<div className="arrow__bottom "></div>
					</div>
				</div>
				<div className="progress__step-three ">
					<div className="step__number step__number-three ">
						<p>3</p>
					</div>
					<div className="step__desc ">Оплата</div>
					<div className="step__arrow step__arrow-three ">
						<div className="arrow__top "></div>
						<div className="arrow__bottom "></div>
					</div>
				</div>
				<div className="progress__step-four ">
					<div className="step__number step__number-four ">
						<p>4</p>
					</div>
					<div className="step__desc ">Проверка</div>
				</div>
				<div className="end__steps "></div>
				</div>
			</div>
	)
}
