const Example3 = (props) => {
    const { Experiences } = props.info;

    return (
        <div>
            <h3>Experiences</h3>
            <ul>
                {Experiences.map((experience, index) => {
                    return (
                        <li key={index}>
                            <p>{experience.companyName}</p>
                            <img src={experience.logo} alt={`${experience.companyName} logo`} />
                            <a href={experience.url} target="_blank" rel="noopener noreferrer">
                                {experience.url}
                            </a>
                            <div>
                                {experience.roles.map((role, i) => {
                                    return (
                                        <p key={i}>
                                            {role.title} - {role.startDate} to {role.endDate} in {role.location}
                                        </p>
                                    );
                                })}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Example3;
