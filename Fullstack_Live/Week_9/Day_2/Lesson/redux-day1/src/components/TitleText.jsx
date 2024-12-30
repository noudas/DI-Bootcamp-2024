import { useSelector, connect } from "react-redux";
const TitleText = (props) => {
  const title = useSelector((state) => state.titleReducer.title);
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
};
export default TitleText;
