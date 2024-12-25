const Example1 = (props) => {
    const { socialmedias } = props;

    return (
        <div>
            <h3>Social Medias</h3>
            <ul>
                {socialmedias.map((media, index) => {
                    return (
                        <li key={index}>
                            <a href={media} target="_blank" rel="noopener noreferrer">
                                {media}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Example1;
