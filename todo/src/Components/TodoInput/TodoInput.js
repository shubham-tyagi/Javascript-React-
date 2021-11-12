import "./TodoInput.css";
import { useState } from "react";
function TodoInput(props) {
  const [inputData, setInputData] = useState("");

  let onSubmitHandler = (event) => {
    event.preventDefault();
    props.onInputSubmit(inputData);
    setInputData("");
  };

  let onChangehandler = (event) => {
    setInputData(event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form-card">
        <label>
          <div className="label-heading">Enter Task :</div>
          <input
            className="input-feild"
            type="text"
            value={inputData}
            onChange={onChangehandler}
          />
        </label>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
