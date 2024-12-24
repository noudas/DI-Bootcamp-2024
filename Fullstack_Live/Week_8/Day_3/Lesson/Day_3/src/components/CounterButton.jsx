const CounterButton = ({ onClick, value }) => {
  return (
    <>
      <button onClick={onClick}>{value}</button>
    </>
  );
};

export default CounterButton;