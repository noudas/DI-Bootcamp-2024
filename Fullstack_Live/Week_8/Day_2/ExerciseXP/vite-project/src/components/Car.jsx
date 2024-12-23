const CarModel = (props) => {
    return (
        <>
            <header>
                <h3>The brand is {props.name}</h3>
                <h3>This car is {props.model}</h3>
            </header>
        </>
    );
};

export default CarModel;
