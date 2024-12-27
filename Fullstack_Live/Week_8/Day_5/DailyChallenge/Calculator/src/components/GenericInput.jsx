const GenericInput = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="number"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="generic-input"
        />
    );
};

export default GenericInput;
