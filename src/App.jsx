import { useState } from "react";
import Form from "../src/components/form/form.jsx";
import Card from "../src/components/card/card.jsx";
import './index.css';

export default function App() {
  const [cvc, setCvc] = useState('000');
  const [cardNum, setCardNum] = useState("0000000000000000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cardholder, setCardholder] = useState("");

  return (
    <div className="grid-column">
      <Card 
        cvc={cvc}
        cardNum={cardNum}
        month={month}
        year={year}
        cardholder={cardholder}/>
      <Form 
        cvc={cvc}
        setCvc={setCvc}
        cardNum={cardNum}
        setCardNum={setCardNum}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        cardholder={cardholder}
        setCardholder={setCardholder}/>
    </div>
  )
}
