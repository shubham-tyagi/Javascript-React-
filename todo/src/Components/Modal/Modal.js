import "./Modal.css";
import Button from "../Button/Button";
function Modal(props) {

  let variableClass = props.errorCode === 1 ? 'show' : 'hide';
  function onButtonClickHandler(){
    props.clickModal(0);
  }

  return (
    <div>
      <div className={`modal ${variableClass}`} onClick={onButtonClickHandler}/>
      <div className={`${variableClass}`} >
        <div className="modal-content"> 
          <div className="error-heading">
            An error occured
          </div>
          <div className="error-content">
            Cant add Empty task in the list, Please enter something
          </div> 
          <div onClick={onButtonClickHandler}>
            <Button>Done</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
