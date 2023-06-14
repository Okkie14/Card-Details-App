import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ExpireYear({ setYear, year, yearError, setYearError, yearErrorMessage, setYearErrorMessage }) {
    const [touchYear, setTouchYear] = useState(false);
    const [incorrectYear, setIncorrectYear] = useState('hidden');

    const classes = ` exp-inputs activeState ${yearError}`

    let currentYear = new Date().getFullYear() % 100;

    useEffect(() => {
        if (touchYear && year === '00' || touchYear && year === undefined) {
        setYearErrorMessage('error-message')
        setYearError('error')
        } else if (year < currentYear && touchYear) {
            setIncorrectYear('error-message')
            setYearError('error')
        } else {
            setIncorrectYear('hidden')
            setYearError('')
            setYearErrorMessage('hidden')
        }
    }, [touchYear, year, setYearErrorMessage, setYearError, setIncorrectYear, currentYear]);

    return (
        <form className='exp-date'>
            <label htmlFor="expYear" className="formYear">(MM/YY)</label>
            <input 
                type="text"
                id='expYear'
                inputMode="numeric"
                pattern="[0-9]{2}"
                maxLength="2"
                placeholder="YY"
                className={classes}
                onBlur={() => setTouchYear(true)}
                onChange={(e) => setYear(e.target.value)} />
            <span className={yearErrorMessage}>Can&apos;t be blank</span>
            <span className={incorrectYear}>Incorrect Year was added</span>
        </form>
    )
}

ExpireYear.propTypes = {
    setYear: PropTypes.func, 
    year: PropTypes.string, 
    yearError: PropTypes.string, 
    setYearError: PropTypes.func, 
    yearErrorMessage: PropTypes.string, 
    setYearErrorMessage: PropTypes.func
}