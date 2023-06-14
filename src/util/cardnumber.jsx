import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CardNumber({ cardNum, setCardNum, setError, setErrorMessage, error, errorMessage }) {
    const [touchCardNum, setTouchCardNum] = useState(false);
    const [incorrectCardNum, setIncorrectCardNum] = useState('hidden');
    const [invalidCardNum, setInvalidCardNum] = useState('hidden');

    const classes = `activeState ${error}`

    const luhnCheck = num => {
        let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit
        return sum % 10 === 0;
    }

    useEffect(() => {
        let regNum = /[a-zA-Z]/g;
        if (cardNum === '0000000000000000' && touchCardNum || cardNum === undefined && touchCardNum) {
            setError('error')
            setErrorMessage('error-message')
        } else {
            if (cardNum.match(regNum) && touchCardNum) {
                setError('error')
                setIncorrectCardNum('error-message')
            } else if (luhnCheck(cardNum) === false && touchCardNum) {
                setError('error')
                setInvalidCardNum('error-message')

            } else {
                setErrorMessage('hidden')
                setError('')
                setInvalidCardNum('hidden')
            }
        }
    }, [cardNum, touchCardNum, setError, setErrorMessage])  

    return (
        <form className='formCardNum'>
            <label htmlFor="cardNumber" className='cardNumber'>Card Number</label>
            <input
                type="text"
                id="cardNumber"
                inputMode="numeric"
                pattern="[0-9]"
                maxLength='16'
                className={classes}
                placeholder='e.g. 1234 5678 9123 0000'
                onBlur={() => setTouchCardNum(true)}
                onChange={(e) => setCardNum(e.target.value)} 
                required/>
            <span className={errorMessage}>Can&apos;t be blank</span>
            <span className={incorrectCardNum}>Wrong format, numbers only</span>
            <span className={invalidCardNum}>Invalid card number was entered</span>
        </form>
    )
}

CardNumber.propTypes = {
    cardNum: PropTypes.string, 
    setCardNum: PropTypes.func, 
    setError: PropTypes.func, 
    setErrorMessage: PropTypes.func,  
    error: PropTypes.string, 
    errorMessage: PropTypes.string
}