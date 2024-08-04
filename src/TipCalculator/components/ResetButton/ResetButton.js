export default function ResetButton({
  setBill,
  setPercentage1,
  setPercentage2,
}) {
  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
