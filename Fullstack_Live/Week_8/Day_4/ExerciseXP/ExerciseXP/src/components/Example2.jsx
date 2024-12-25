const Example2 = (props) => {
    const { Skills } = props.info;

    return (
        <div>
            <h3>Skills</h3>
            <ul>
                {Skills.map((skill, index) => {
                    return (
                        <li key={index}>
                            {skill.Area}: 
                            {skill.SkillSet.map(
                                (s, i) => <div key={i}>{s.Name} - {s.Hot ? "Hot" : "Not Hot"}</div>
                                )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Example2;
