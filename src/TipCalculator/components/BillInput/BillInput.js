export default function BillInput({ bill, onSetBill }) {
  const handleChange = (e) => {
    onSetBill(Number(e.target.value));
  };

  return (
    <div>
      <h3>How much was the bill?</h3>
      <input
        placeholder="Bill value..."
        type="text"
        value={bill}
        onChange={handleChange}
      ></input>
    </div>
  );
}
