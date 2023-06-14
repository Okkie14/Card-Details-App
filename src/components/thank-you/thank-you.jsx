import complete from '../../assets/images/icon-complete.svg';
import PropTypes from 'prop-types';

export default function ThankYou({ toggler, setToggler }) {
    const handleClick = () => {
        if(!toggler) {
            setToggler(true);
        }
    }

    return (
        <div className='thank-you'>
            <img src={complete} />
            <h2 className='thankyou-header'>Thank you</h2>
            <p className='thankyou-description'>We&apos;ve added your card details</p>
            <button onClick={handleClick} className='btn confirm-btn'>Continue</button>
        </div>
    )
}

ThankYou.propTypes = {
    toggler: PropTypes.bool,
    setToggler: PropTypes.func,
}