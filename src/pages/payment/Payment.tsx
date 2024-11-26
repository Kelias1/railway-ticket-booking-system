import './payment.css';

function Payment() {
	return (
		<form className='form__payment'>
      <div className='payment'>
        <div className='payment__data'>
          <div className='data__head'>
            <h2 className='data__title'>Персональные данные</h2>
          </div>

          <div className='data__inputs-names'>
            <label className='data__name-label'>
              <p>Фамилия</p>
              <input
                className='data__name-input'
                type="text"
                required/>
            </label>
            <label className='data__name-label'>
              <p>Имя</p>
              <input
                className='data__name-input'
                type="text"
                required/>
            </label>
            <label className='data__name-label'>
              <p>Отчество</p>
              <input
                className='data__name-input'
                type="text"
                required/>
            </label>
          </div>

          <div className='data__inputs-phone'>
            <label className='data__phone-label'>
              <p>Контактный телефон</p>
              <input
                className='data__phone-input'
                type="tel"
                required 
                placeholder='+7 ___ ___ __ __'/>
            </label>
          </div>

          <div className='data__inputs-mail'>
            <label className='data__mail-label'>
              <p>E-mail</p>
              <input
                className='data__mail-input'
                type="email"
                required/>
            </label>
          </div>
        </div>

        <div className='payment__method'>
          <div className='method__head'>
            <h2 className='method__title'>Способ оплаты</h2>
          </div>

          <div className='method__check-online'>
            <div className='method__check-input method__check-input-ok**'></div>
            <p className='method__check-text method__check-text-ok**'>Онлайн</p>
          </div>

          <div className='methods__payment'>
            <div className='methods__payment-text'>
              <p>Банковской <br /> картой</p>
              <p className='paypal'>PayPal</p>
              <p className='visa-qiwi'>Visa QIWI Wallet</p>
            </div>
          </div>

          <div className='method__check-cash'>
            <div className='method__check-input method__check-input-ok**'></div>
            <p className='method__check-text** method__check-text-ok'>Наличными</p>
          </div>
        </div>

      </div>
      <button className='payment__button-ok payment__button**' type='button'>купить билеты</button>
    </form>
	)
}

export default Payment;