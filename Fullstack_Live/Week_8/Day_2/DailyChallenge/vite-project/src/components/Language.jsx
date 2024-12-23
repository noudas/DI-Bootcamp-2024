import "./Language.css"

const Language = (props) => {
    const { name, votes } = props.info;
  
    return (
      <div className="languagecards">
        <p>
          <strong>{name}</strong>: {votes} votes
        </p>
        <button onClick={props.onVote}>Vote</button>
      </div>
    );
  };
  
  export default Language;