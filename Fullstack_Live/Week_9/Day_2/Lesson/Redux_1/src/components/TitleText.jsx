const TitleText = ({ title }) => {
    return (
      <div>
        <h1>{title ? title : "Title Placeholder"}</h1>
      </div>
    );
  };
  
  export default TitleText;
  