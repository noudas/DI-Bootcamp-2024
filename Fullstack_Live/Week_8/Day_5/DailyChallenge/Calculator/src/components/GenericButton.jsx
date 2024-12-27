const GenericButton = ({ symbol, onClick }) => {
    return (
        <button onClick={() => onClick(symbol)}>{symbol}</button>
    );
};

export default GenericButton;
