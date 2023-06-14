import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ExpireMonth({ setMonth, month, monthError, setMonthError, monthErrorMessage, setMonthErrorMessage }) {
  const [touchMonth, setTouchMonth] = useState(false);
  const [incorrectMonth, setIncorrectMonth] = useState('hidden');

  const classes = `exp-inputs activeState ${monthError}`

  let currentMonth = new Date().getMonth();
  

  useEffect(() => {
    const monthsOfTheYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    if (touchMonth && month === '00' || touchMonth && month === undefined) {
      setMonthErrorMessage('error-message')
      setMonthError('error')
    } else if (month > 12 || month < monthsOfTheYear[currentMonth] && touchMonth) {
      setIncorrectMonth('error-message')
      setMonthError('error')
    } else {
      setIncorrectMonth('hidden')
      setMonthErrorMessage('hidden')
      setMonthError('')
    }
  }, [touchMonth, month, setMonthErrorMessage, setMonthError, setIncorrectMonth, setMonth, currentMonth])

  return (
    <form className='exp-date'>
      <label htmlFor="expMonth" className="formMonth">Exp. Date</label>
      <input 
        type="text"
        id='expMonth'
        inputMode="numeric"
        pattern="[0-9]{2}"
        maxLength="2"
        placeholder="MM"
        className={classes}
        onBlur={() => setTouchMonth(true)}
        onChange={(e) => setMonth(e.target.value)} 
        required/>
      <span className={monthErrorMessage}>Can&apos;t be blank</span>
      <span className={incorrectMonth}>Incorrect month inserted</span>
    </form>
  )
}

ExpireMonth.propTypes = {
  setMonth: PropTypes.func, 
  month: PropTypes.string, 
  monthError: PropTypes.string, 
  setMonthError: PropTypes.func, 
  monthErrorMessage: PropTypes.string, 
  setMonthErrorMessage: PropTypes.func
}