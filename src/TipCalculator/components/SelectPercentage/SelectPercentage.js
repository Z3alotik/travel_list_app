export default function SelectPercentage({
  children,
  percentage,
  onSetPercentage,
}) {
  const satisfactionArray = [
    { text: "Dissatisfied (0%)", value: 0 },
    {
      text: "It was okay (5%)",
      value: 5,
    },
    {
      text: "It was good (10%)",
      value: 10,
    },
    {
      text: "Absolutely amazing (20%)",
      value: 20,
    },
  ];

  return (
    <div>
      <h3>{children}</h3>
      <select
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        {satisfactionArray.map((el) => (
          <option value={el.value} key={el.value}>
            {el.text}
          </option>
        ))}
      </select>
    </div>
  );
}
