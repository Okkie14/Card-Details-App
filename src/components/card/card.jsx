import frontCard from '../../assets/images/bg-card-front.png';
import backCard from '../../assets/images/bg-card-back.png';
import logo from '../../assets/images/card-logo.svg';
import PropTypes from 'prop-types';

export default function Card({ cvc, cardNum, month, year, cardholder }) {

    const firstNums = cardNum.slice(0, 4);
    const secondNums = cardNum.slice(4, 8);
    const thirdNums = cardNum.slice(8, 12);
    const lastNums = cardNum.slice(12, 16);

    const cardNumber = firstNums + " " + secondNums + " " + thirdNums + " " + lastNums

    let cardMonth;
    if (month === '00') {
        cardMonth = month
    } else if (month < 10 && month > 0) {
        cardMonth = `0${month}`
    } else if (month >= 10) {
        cardMonth = month
    } else {
        cardMonth = '00'
    }

    let cardYear;
    if (year === '00' || year === '') {
        cardYear = '00'
    } else {
        cardYear = year
    }

    let cardName;
    if (cardholder === '') {
        cardName = 'Jane Appleseed'
    } else {
        cardName = cardholder
    }

    return (
        <div className='card-details'>
            <div className="front-card-position">
                <img src={frontCard} className='frontCard'/>
                <div>
                    <img src={logo} className='card-logo'/>
                    <p className='cardName'>{cardName}</p>
                    <p className='cardNum'>{cardNumber}</p>
                    <p className='cardExp'>{cardMonth}/{cardYear}</p>
                </div>
            </div>
            <div className="back-card-position">
                <img src={backCard} className='backCard'/>
                <p className='cardCVC'>{cvc}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    cvc: PropTypes.string,
    cardNum: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
    cardholder: PropTypes.string
}