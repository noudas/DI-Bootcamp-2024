const Display = (props) =>{

    const {fullName, age, gender, country, alergies = []} = props.info;

    const restrictions = [
        { label: "Nuts free", value: "peanuts" },
        { label: "Lactose free", value: "lactose" },
        { label: "Vegan meal", value: "vegan" },
      ];


    return(
        <>
            <h1>Display Area</h1>

            <p>Your name: {fullName}</p>
            <p>Your age: {age}</p>
            <p>Your gender: {gender}</p>
            <p>Your destination: {country}</p>
            <p>Your dietary restrictions:</p>

            <div className="restrictions">
                    {restrictions.map((restriction) => (
                    <span key={restriction.value}>
                        **{restriction.label}: {alergies.includes(restriction.value) ? "Yes" : "No"}
                    </span>
                ))};
            </div>
            
        </>
    )
}

export default Display;