import { useDispatch } from "react-redux";
import { changeTitle, CHANGE_TITLE } from "../redux/titleActions";

const InputText = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <input
          onChange={(e) =>
            dispatch({ type: CHANGE_TITLE, payload: e.target.value })
          }
          placeholder='Change Title...'
        />
      </div>
    </>
  );
};
export default InputText;
