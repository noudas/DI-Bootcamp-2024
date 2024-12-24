const CounterButton = ({ setCount, num }) => {
  return (
    <>
      <button onClick={() => setCount((prev) => prev + num)}>
        {num > 0 ? "+" : "-"}
      </button>
    </>
  );
};
export default CounterButton;
