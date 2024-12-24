import { useState } from "react";

const ReactForm = (props) => {
  //   const [name, setName] = useState("");
  //   const [select, setSelect] = useState("");
  //   const [yesno, setYesNo] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const select = e.target.select.value;
    const yesno = e.target.yesno.checked;
    console.log(name, select, yesno);
  };

  return (
    <>
      <h2>ReactForm</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='name' name='name' />
        <br />
        <select name='select'>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
        <br />
        YesNo: <input type='checkbox' name='yesno' />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};
export default ReactForm;

/**
 * Create a form with:
 * 1.input text
 * 2.input submit
 * 3.input select with 3 options
 * 4.checkbox
 * Console log the input's values when submitting the form using useState
 */
