import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CardholderName({ cardholder, setCardholder, setCardholderError, setCardErrorMessage, cardholderError, cardErrorMessage }) {
    const [touchedCardholder, setTouchedCardholder] = useState(false);

    const classes = `activeState ${cardholderError}`

    useEffect(() => {
        let regName = /[0-9]/g;
        if (cardholder === "" && touchedCardholder) {
            setCardholderError('error');
            setCardErrorMessage('error-message');
        } else {
            if (cardholder.match(regName) && touchedCardholder) {
                setCardholderError('error');
                setCardErrorMessage('error-message');
            } else {
                setCardErrorMessage('hidden');
                setCardholderError('');
            }
        }
    }, [cardholder, touchedCardholder, setCardholderError, setCardErrorMessage])

    return (
        <form autoComplete='off' className='formCardName'>
            <label htmlFor="cardholdername" className='cardholderName'>Cardholder Name</label>
            <input 
                id="cardholdername"
                value={cardholder}
                pattern='[A-Za-z]+'
                type='text'
                placeholder="e.g. Jane Appleseed"
                onChange={(e) => setCardholder(e.target.value)}
                onBlur={() => setTouchedCardholder(true)}
                className={classes}
                required />
            <span className={cardErrorMessage}>Please fill in your name</span>
        </form>
    )
}

CardholderName.propTypes = {
    cardholder: PropTypes.string,
    setCardholder: PropTypes.func.isRequired,
    setCardErrorMessage: PropTypes.func.isRequired,
    setCardholderError: PropTypes.func.isRequired,
    cardholderError: PropTypes.string.isRequired,
    cardErrorMessage: PropTypes.string.isRequired
}