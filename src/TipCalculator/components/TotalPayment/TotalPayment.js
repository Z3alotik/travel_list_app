export default function TotalPayment({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay {bill + tip} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
