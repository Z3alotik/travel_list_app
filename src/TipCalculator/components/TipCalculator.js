import BillInput from "./BillInput/BillInput";
import ResetButton from "./ResetButton/ResetButton";
import SelectPercentage from "./SelectPercentage/SelectPercentage";
import TotalPayment from "./TotalPayment/TotalPayment";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={percentage1}
        onSetPercentage={setPercentage1}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentage2}
        onSetPercentage={setPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>

      <TotalPayment bill={bill} tip={tip} />
      <ResetButton
        setBill={setBill}
        setPercentage1={setPercentage1}
        setPercentage2={setPercentage2}
      />
    </div>
  );
}
