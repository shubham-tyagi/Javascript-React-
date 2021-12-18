import "./Modal.css";
import Button from "../Button/Button";
function Modal(props) {
  //   if(props.errorCode == 1)
  console.log(props.errorCode);
  const onClickHandler = () => {
    props.clickModal(0);
  };
  let variableClass = props.errorCode === 1 ? 'show' : 'hide';
  return (
    <div
      className={`modal ${variableClass}`}
      
    >
      <div className="modal-content"> 
        <div className="error-heading">
          An error occured
        </div>
        <div className="error-content">
          Cant add Empty task in the list, Please enter something
        </div> 
        <Button handleClick={onClickHandler}>done</Button>
     </div>
     
    </div>
  );
}

export default Modal;
