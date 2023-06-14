import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CvcNum({ cvc, setCvc, cvcError, setCvcError, cvcErrorMessage, setCvcErrorMessage }) {
    const [touchCvc, setTouchCvc] = useState(false);

    const classes = `exp-inputs activeState ${cvcError}`

    useEffect(() => {
        if (touchCvc && cvc === "000" || touchCvc && cvc === '') {
            setCvcError('error')
            setCvcErrorMessage('error-message')
        } else {
            setCvcErrorMessage('hidden')
            setCvcError('')
        }
    }, [touchCvc, cvc, setCvcErrorMessage, setCvcError])

    return (
        <div className='formCVC'>
            <label htmlFor='cvc' className='cvc'>Cvc</label>
            <input 
                type='text'
                inputMode='numeric'
                id='cvc'
                pattern='[0-9]{3}'
                placeholder='e.g. 123'
                maxLength="3"
                className={classes}
                onBlur={() => setTouchCvc(true)}
                onChange={(e) => setCvc(e.target.value)}
                />
            <span className={cvcErrorMessage}>Can&apos;t be blank</span>
        </div>
    )
}

CvcNum.propTypes = {
    cvc: PropTypes.string,
    setCvc: PropTypes.func,
    cvcError: PropTypes.string,
    setCvcError: PropTypes.func,
    cvcErrorMessage: PropTypes.string,
    setCvcErrorMessage: PropTypes.func
}