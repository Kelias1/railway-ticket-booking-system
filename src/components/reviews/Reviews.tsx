import imgReview1 from '../../assets/images/review1.png';
import imgReview2 from '../../assets/images/review2.png';
import './reviews.css';

function Reviews() {
	return (
		<>
		<section id="reviews" className="main__reviews">
			<h2 className="reviews__title">отзывы</h2>
			<div className="reviews-container">
				<div className="reviews__carousel">
					<div className="review">
						<img src={imgReview1} className="review__image" alt="Екатерина Вальнова" />
						<div className="review__wrap">
							<span className="review__name">Екатерина Вальнова</span>
							<p className="review__text">Доброжелательные подсказки <br /> на&nbsp;всех этапах помогут правильно заполнить поля и&nbsp;без затруднений купить авиа или ж/д билет, даже если вы&nbsp;заказываете онлайн билет <br /> впервые.</p>
						</div>
					</div>
					<div className="review">
						<img src={imgReview2} className="review__image" alt="Евгений Стрыкало" />
						<div className="review__wrap">
							<span className="review__name">Евгений Стрыкало</span>
							<p className="review__text">СМС-сопровождение до&nbsp;посадки <br /> Сразу после оплаты ж/д билетов <br /> и&nbsp;за&nbsp;3&nbsp;часа до&nbsp;отправления мы&nbsp;пришлем вам СМС-напоминание о&nbsp;поездке.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="carousel__dots">
				<div className="carousel__dot dot active__dot"></div>
				<div className="carousel__dot dot__0"></div>
				<div className="carousel__dot dot__1"></div>
				<div className="carousel__dot dot__2"></div>
				<div className="carousel__dot dot__3"></div>
			</div>
		</section>
		</>
	)
}

export default Reviews;