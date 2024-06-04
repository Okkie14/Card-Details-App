import { useState, useEffect } from "react";
import CardholderName from "../../util/cardholdername.jsx";
import CardNumber from "../../util/cardnumber.jsx";
import ExpireMonth from "../../util/expireMonth.jsx";
import ExpireYear from "../../util/expireYear.jsx";
import CvcNum from "../../util/cvcnum.jsx";
import ThankYou from "../thank-you/thank-you.jsx";
import PropTypes from "prop-types";

export default function Form({
  cvc,
  setCvc,
  cardNum,
  setCardNum,
  month,
  setMonth,
  year,
  setYear,
  cardholder,
  setCardholder,
}) {
  const [cardholderError, setCardholderError] = useState("");
  const [cardErrorMessage, setCardErrorMessage] = useState("hidden");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("hidden");
  const [monthError, setMonthError] = useState("");
  const [monthErrorMessage, setMonthErrorMessage] = useState("hidden");
  const [yearError, setYearError] = useState("");
  const [yearErrorMessage, setYearErrorMessage] = useState("hidden");
  const [cvcError, setCvcError] = useState("");
  const [cvcErrorMessage, setCvcErrorMessage] = useState("hidden");
  const [toggler, setToggler] = useState(true);
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (
      cardholderError === "error" ||
      error === "error" ||
      monthError === "error" ||
      yearError === "error" ||
      cvcError === "error" ||
      cardholder === "" ||
      cardNum === "0000000000000000" ||
      month === "00" ||
      year === "00" ||
      cvc === "000"
    ) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  });

  const handleSubmit = () => {
    if (
      cardholderError === "error" ||
      error === "error" ||
      monthError === "error" ||
      yearError === "error" ||
      cvcError === "error" ||
      cardholder === "" ||
      cardNum === "0000000000000000" ||
      month === "00" ||
      year === "00" ||
      cvc === "000"
    ) {
      setToggler(true);
    } else {
      setToggler(false);
    }
  };

  return (
    <div className="form-area">
      {toggler ? (
        <div className="form">
          <CardholderName
            cardholder={cardholder}
            setCardholder={setCardholder}
            setCardErrorMessage={setCardErrorMessage}
            setCardholderError={setCardholderError}
            cardholderError={cardholderError}
            cardErrorMessage={cardErrorMessage}
          />
          <CardNumber
            cardNum={cardNum}
            setCardNum={setCardNum}
            setError={setError}
            setErrorMessage={setErrorMessage}
            error={error}
            errorMessage={errorMessage}
          />
          <div className="form-exp-cvc">
            <ExpireMonth
              month={month}
              setMonth={setMonth}
              setMonthError={setMonthError}
              setMonthErrorMessage={setMonthErrorMessage}
              monthError={monthError}
              monthErrorMessage={monthErrorMessage}
            />
            <ExpireYear
              year={year}
              setYear={setYear}
              yearError={yearError}
              setYearError={setYearError}
              yearErrorMessage={yearErrorMessage}
              setYearErrorMessage={setYearErrorMessage}
            />
            <CvcNum
              cvc={cvc}
              setCvc={setCvc}
              cvcError={cvcError}
              cvcErrorMessage={cvcErrorMessage}
              setCvcError={setCvcError}
              setCvcErrorMessage={setCvcErrorMessage}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn confirm-btn"
            disabled={btnDisabled}
          >
            Confirm
          </button>
        </div>
      ) : (
        <ThankYou toggler={toggler} setToggler={setToggler} className="form" />
      )}
    </div>
  );
}

Form.propTypes = {
  cvc: PropTypes.string,
  setCvc: PropTypes.func.isRequired,
  cardNum: PropTypes.string,
  setCardNum: PropTypes.func.isRequired,
  month: PropTypes.string,
  setMonth: PropTypes.func.isRequired,
  year: PropTypes.string,
  setYear: PropTypes.func.isRequired,
  cardholder: PropTypes.string,
  setCardholder: PropTypes.func.isRequired,
};
