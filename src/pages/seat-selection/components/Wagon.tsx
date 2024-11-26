import '../list-wagons.css';

function Wagon() {
	return (
		<div>
			<div className="wagon__description-prices">
				<div className="wagon__number">
					<h4 className="wagon__number-title">02</h4>
					<p className="wagon__number-text">вагон</p>
				</div>
				<div className="wagon__seats-amount">
					<p className="seats__amount-title">Места
						<span className="seats__amount-number"> 8</span>
					</p>
				</div>
				<div className="wagon__seats-price">
					<p className="seats__price-title">Стоимость</p>
					<p className="seats__price-text">4 920<span className="currency-symbol"></span></p>
				</div>
				<div className="wagon__services">
					<p className="wagon__services-text">Обслуживание <span>фпк</span></p>
					<div className="wagon__services-img">
						<div className="service__onboard">
							<span className="service__air service__included"></span>
							<div className="hide-section">кондиционер</div>
						</div>
						<div className="service__onboard">
							<span className="service__wifi service__included"></span>
							<div className="hide-section">Wi-Fi</div>
						</div>
						<div className="service__onboard">
							<span className="service__linens service__included"></span>
							<div className="hide-section">белье</div>
						</div>
						<div className="service__onboard">
							<span className="service__coffee service__coffee-selected"></span>
							<div className="hide-section">питание</div>
						</div>
					</div>
					<div className="wagon__seats-selected">
						<p>19 человек выбирают места в этом поезде</p>
					</div>
				</div>
			</div>
			{/* VAGON LUX */}
			<div className="wagon__seats-info">
				{/* <div className="seats__info-lux">
					<div className="scheme__seats-lux" style={{ left: "130.63px" }}>
						<span className="seat__class seat__left seat__available">1</span>
						<span className="seat__class seat__right seat__available">3</span>
					</div>
					<div className="scheme__seats-lux" style={{ left: "220.26px" }}>
						<span className="seat__class seat__left seat__occupied">4</span>
						<span className="seat__class seat__right seat__occupied">5</span>
					</div>
					<div className="scheme__seats-lux" style={{ left: "309.89px" }}>
						<span className="seat__class seat__left seat__occupied">6</span>
						<span className="seat__class seat__right seat__available">7</span>
					</div>
					<div className="scheme__seats-lux" style={{ left: "399.52px" }}>
						<span className="seat__class seat__left seat__available">8</span>
						<span className="seat__class seat__right seat__available">9</span>
					</div>
					<div className="scheme__seats-lux" style={{ left: "489.15px" }}>
						<span className="seat__class seat__left seat__occupied">10</span>
						<span className="seat__class seat__right seat__available">11</span>
					</div>
					<div className="scheme__seats-lux" style={{ left: "578.78px" }}>
						<span className="seat__class seat__left seat__occupied">12</span>
						<span className="seat__class seat__right seat__occupied">13</span>
					</div>
					<div className="scheme__seats-lux" style={{ left: "668.41px" }}>
						<span className="seat__class seat__left seat__occupied">14</span>
						<span className="seat__class seat__right seat__available">15</span>
					</div>
					<div className="scheme__seats-lux" style={{ left: "758.04px" }}>
						<span className="seat__class seat__left seat__occupied">16</span>
						<span className="seat__class seat__right seat__available">18</span>
					</div>
				</div> */}

				{/* VAGON PLATZKART */}
				{/* <div className="seats__info-platzkart">
					<div className="scheme__seats-platzkart" style={{ left: "130.63px" }}>
						<span className="seat__class seat__top-left seat__occupied">2</span>
						<span className="seat__class seat__bottom-left seat__available">1</span>
						<span className="seat__class seat__side-left seat__available">33</span>
						<span className="seat__class seat__top-right seat__occupied">4</span>
						<span className="seat__class seat__bottom-right seat__available">3</span>
						<span className="seat__class seat__side-right seat__occupied">34</span>
					</div>

					<div className="scheme__seats-platzkart" style={{ left: "220.26px" }}>
						<span className="seat__class seat__top-left seat__occupied">6</span>
						<span className="seat__class seat__bottom-left seat__occupied">5</span>
						<span className="seat__class seat__side-left seat__occupied">35</span>
						<span className="seat__class seat__top-right seat__occupied">8</span>
						<span className="seat__class seat__bottom-right seat__occupied">7</span>
						<span className="seat__class seat__side-right seat__occupied">36</span>
					</div>

					<div className="scheme__seats-platzkart" style={{ left: "309.89px" }}>
						<span className="seat__class seat__top-left seat__occupied">10</span>
						<span className="seat__class seat__bottom-left seat__occupied">9</span>
						<span className="seat__class seat__side-left seat__available">37</span>
						<span className="seat__class seat__top-right seat__occupied">12</span>
						<span className="seat__class seat__bottom-right seat__available">11</span>
						<span className="seat__class seat__side-right seat__occupied">38</span>
					</div>

					<div className="scheme__seats-platzkart" style={{ left: "399.52px" }}>
						<span className="seat__class seat__top-left seat__occupied">14</span>
						<span className="seat__class seat__bottom-left seat__available">13</span>
						<span className="seat__class seat__side-left seat__available">39</span>
						<span className="seat__class seat__top-right seat__occupied">16</span>
						<span className="seat__class seat__bottom-right seat__available">15</span>
						<span className="seat__class seat__side-right seat__occupied">40</span>
					</div>

					<div className="scheme__seats-platzkart" style={{ left: "489.15px" }}>
						<span className="seat__class seat__top-left seat__available seat__selected">18</span>
						<span className="seat__class seat__bottom-left seat__available seat__selected">17</span>
						<span className="seat__class seat__side-left seat__available">41</span>
						<span className="seat__class seat__top-right seat__available">20</span>
						<span className="seat__class seat__bottom-right seat__available seat__selected">19</span>
						<span className="seat__class seat__side-right seat__occupied">42</span>
					</div>

					<div className="scheme__seats-platzkart" style={{ left: "578.78px" }}>
						<span className="seat__class seat__top-left seat__occupied">22</span>
						<span className="seat__class seat__bottom-left seat__occupied">21</span>
						<span className="seat__class seat__side-left seat__occupied">43</span>
						<span className="seat__class seat__top-right seat__occupied">24</span>
						<span className="seat__class seat__bottom-right seat__occupied">23</span>
						<span className="seat__class seat__side-right seat__occupied">44</span>
					</div>

					<div className="scheme__seats-platzkart" style={{ left: "668.41px" }}>
						<span className="seat__class seat__top-left seat__occupied">26</span>
						<span className="seat__class seat__bottom-left seat__occupied">25</span>
						<span className="seat__class seat__side-left seat__available">45</span>
						<span className="seat__class seat__top-right seat__occupied">28</span>
						<span className="seat__class seat__bottom-right seat__available">27</span>
						<span className="seat__class seat__side-right seat__available">46</span>
					</div>

					<div className="scheme__seats-platzkart" style={{ left: "758.04px" }}>
						<span className="seat__class seat__top-left seat__available">30</span>
						<span className="seat__class seat__bottom-left seat__available">29</span>
						<span className="seat__class seat__side-left seat__available">47</span>
						<span className="seat__class seat__top-right seat__available">32</span>
						<span className="seat__class seat__bottom-right seat__available">31</span>
						<span className="seat__class seat__side-right seat__occupied">48</span>
					</div>
				</div> */}
				{/* VAGON ECONOMICO */}
				<div className="seats__info-economy">
					<div className="scheme__seats-economy">
						<span className="seat__class seat__window-top seat__available" style={{ left: "11.3px" }}>2</span>
						<span className="seat__class seat__window-top seat__available" style={{ left: "55.5px" }}>4</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "99.7px" }}>6</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "143.9px" }}>8</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "188.1px" }}>10</span>
						<span className="seat__class seat__window-top seat__available seat__selected" style={{ left: "232.3px" }}>12</span>
						<span className="seat__class seat__window-top seat__available seat__selected" style={{ left: "276.5px" }}>14</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "320.7px" }}>16</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "364.9px" }}>18</span>
						<span className="seat__class seat__window-top seat__available" style={{ left: "409.1px" }}>20</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "453.3px" }}>22</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "497.5px" }}>24</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "541.7px" }}>26</span>
						<span className="seat__class seat__window-top seat__available" style={{ left: "585.9px" }}>28</span>
						<span className="seat__class seat__window-top seat__occupied" style={{ left: "630.1px" }}>30</span>
						<span className="seat__class seat__window-top seat__available" style={{ left: "674.3px" }}>32</span>

						<span className="seat__class seat__aisle-top seat__available" style={{ left: "11.3px" }}>1</span>
						<span className="seat__class seat__aisle-top seat__available" style={{ left: "55.5px" }}>3</span>
						<span className="seat__class seat__aisle-top seat__occupied" style={{ left: "99.7px" }}>5</span>
						<span className="seat__class seat__aisle-top seat__occupied" style={{ left: "143.9px" }}>7</span>
						<span className="seat__class seat__aisle-top seat__available" style={{ left: "188.1px" }}>9</span>
						<span className="seat__class seat__aisle-top seat__available seat__selected" style={{ left: "232.3px" }}>11</span>
						<span className="seat__class seat__aisle-top seat__available" style={{ left: "276.5px" }}>13</span>
						<span className="seat__class seat__aisle-top seat__available" style={{ left: "320.7px" }}>15</span>
						<span className="seat__class seat__aisle-top seat__occupied" style={{ left: "364.9px" }}>17</span>
						<span className="seat__class seat__aisle-top seat__available" style={{ left: "409.1px" }}>19</span>
						<span className="seat__class seat__aisle-top seat__occupied" style={{ left: "453.3px" }}>21</span>
						<span className="seat__class seat__aisle-top seat__occupied" style={{ left: "497.5px" }}>23</span>
						<span className="seat__class seat__aisle-top seat__occupied" style={{ left: "541.7px" }}>25</span>
						<span className="seat__class seat__aisle-top seat__available" style={{ left: "585.9px" }}>27</span>
						<span className="seat__class seat__aisle-top seat__occupied" style={{ left: "630.1px" }}>29</span>
						<span className="seat__class seat__aisle-top seat__available" style={{ left: "674.3px" }}>31</span>

						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "55.3px" }}>34</span>
						<span className="seat__class seat__aisle-bottom seat__occupied" style={{ left: "99.5px" }}>36</span>
						<span className="seat__class seat__aisle-bottom seat__occupied" style={{ left: "143.7px" }}>38</span>
						<span className="seat__class seat__aisle-bottom seat__occupied" style={{ left: "187.9px" }}>40</span>
						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "232.1px" }}>42</span>
						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "276.3px" }}>44</span>
						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "320.5px" }}>46</span>
						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "364.7px" }}>48</span>
						<span className="seat__class seat__aisle-bottom seat__occupied" style={{ left: "408.9px" }}>50</span>
						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "453.1px" }}>52</span>
						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "497.3px" }}>54</span>
						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "541.5px" }}>56</span>
						<span className="seat__class seat__aisle-bottom seat__occupied" style={{ left: "585.7px" }}>58</span>
						<span className="seat__class seat__aisle-bottom seat__available" style={{ left: "629.9px" }}>60</span>

						<span className="seat__class seat__window-bottom seat__available" style={{ left: "11.3px" }}>33</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "55.5px" }}>35</span>
						<span className="seat__class seat__window-bottom seat__occupied" style={{ left: "99.7px" }}>37</span>
						<span className="seat__class seat__window-bottom seat__occupied" style={{ left: "143.9px" }}>39</span>
						<span className="seat__class seat__window-bottom seat__occupied" style={{ left: "188.1px" }}>41</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "232.3px" }}>43</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "276.5px" }}>45</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "320.7px" }}>47</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "364.9px" }}>49</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "409.1px" }}>51</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "453.3px" }}>53</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "497.5px" }}>55</span>
						<span className="seat__class seat__window-bottom seat__occupied" style={{ left: "541.7px" }}>57</span>
						<span className="seat__class seat__window-bottom seat__occupied" style={{ left: "585.9px" }}>59</span>
						<span className="seat__class seat__window-bottom seat__occupied" style={{ left: "630.1px" }}>61</span>
						<span className="seat__class seat__window-bottom seat__available" style={{ left: "674.3px" }}>62</span>
					</div>
				</div>
				{/* VAGON COUPE */}
				{/* <div className="seats__info-coupe">
					<div className="scheme__seats-coupe" style={{ left: "130.63px" }}>
						<span className="seat__class seat__top-left seat__occupied">2</span>
						<span className="seat__class seat__bottom-left seat__available">1</span>
						<span className="seat__class seat__top-right seat__occupied">4</span>
						<span className="seat__class seat__bottom-right seat__available">3</span>
					</div>

					<div className="scheme__seats-coupe" style={{ left: "220.26px" }}>
						<span className="seat__class seat__top-left seat__occupied">6</span>
						<span className="seat__class seat__bottom-left seat__occupied">5</span>
						<span className="seat__class seat__top-right seat__occupied">8</span>
						<span className="seat__class seat__bottom-right seat__occupied">7</span>
					</div>

					<div className="scheme__seats-coupe" style={{ left: "309.89px" }}>
						<span className="seat__class seat__top-left seat__occupied">10</span>
						<span className="seat__class seat__bottom-left seat__occupied">9</span>
						<span className="seat__class seat__top-right seat__occupied">12</span>
						<span className="seat__class seat__bottom-right seat__available">11</span>
					</div>

					<div className="scheme__seats-coupe" style={{ left: "399.52px" }}>
						<span className="seat__class seat__top-left seat__occupied">14</span>
						<span className="seat__class seat__bottom-left seat__available">13</span>
						<span className="seat__class seat__top-right seat__occupied">16</span>
						<span className="seat__class seat__bottom-right seat__available">15</span>
					</div>

					<div className="scheme__seats-coupe" style={{ left: "489.15px" }}>
						<span className="seat__class seat__top-left seat__available">18</span>
						<span className="seat__class seat__bottom-left seat__occupied">17</span>
						<span className="seat__class seat__top-right seat__occupied">20</span>
						<span className="seat__class seat__bottom-right seat__available">19</span>
					</div>

					<div className="scheme__seats-coupe" style={{ left: "578.78px" }}>
						<span className="seat__class seat__top-left seat__occupied">22</span>
						<span className="seat__class seat__bottom-left seat__occupied">21</span>
						<span className="seat__class seat__top-right seat__occupied">24</span>
						<span className="seat__class seat__bottom-right seat__occupied">23</span>
					</div>

					<div className="scheme__seats-coupe" style={{ left: "668.41px" }}>
						<span className="seat__class seat__top-left seat__occupied">26</span>
						<span className="seat__class seat__bottom-left seat__occupied">25</span>
						<span className="seat__class seat__top-right seat__occupied">28</span>
						<span className="seat__class seat__bottom-right seat__available">27</span>
					</div>

					<div className="scheme__seats-coupe" style={{ left: "758.04px" }}>
						<span className="seat__class seat__top-left seat__available">30</span>
						<span className="seat__class seat__bottom-left seat__occupied">29</span>
						<span className="seat__class seat__top-right seat__available">32</span>
						<span className="seat__class seat__bottom-right seat__available">31</span>
					</div>

				</div> */}
			</div>
		</div>
	)
}

export default Wagon;