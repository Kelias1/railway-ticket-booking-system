// import BarProgress from '../bar-progress/BarProgress';
import SearchWidget from '../searchWidget/SearchWidget';
import './Header.css';

function Header() {
	return (
		<>
		{/* ВАЖНО!!!!!

		Здесь нужно выбрать класс header, header__choice-train или header__order-complete в зависимости от этапа покупки. Класс со звездочками отключен. На следующем этапе покупки билета необходимо подключить компонент BarProgress. Сейчас он неактивен. */}
			<div className='container'>
				<header className="header header__choice-train** header__order-complete**">
					<div className="header__logo">
						<a href="#" className="header__logo-icon">Лого</a>
					</div>
					<nav className="header__nav">
						<ul className="header__nav-items">
							<li className="header__nav-item">
								<a href="#about">О нас</a>
							</li>
							<li className="header__nav-item">
								<a href="#howItWorks">Как это работает</a>
							</li>
							<li className="header__nav-item">
								<a href="#reviews">Отзывы</a>
							</li>
							<li className="header__nav-item">
								<a href="#footer">Контакты</a>
							</li>
						</ul>
					</nav>
					<div className="header__title-container">
						<h1 className="header__title">Вся жизнь - <span>путешествие!</span></h1>
					</div>
					<SearchWidget />
					{/* <BarProgress /> */}
					<div className="header__endline"></div>
				</header>
			</div>
		</>
	)
}

export default Header;