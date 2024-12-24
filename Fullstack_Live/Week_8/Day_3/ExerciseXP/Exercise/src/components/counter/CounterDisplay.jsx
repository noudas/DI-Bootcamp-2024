const CounterDisplay = ({ count, onClick }) => {
    return (
      <>
        <div className="display" onClick={onClick} style={{ cursor: "pointer" }}>
          {count}
        </div>
      </>
    );
  };
  
  export default CounterDisplay;
  