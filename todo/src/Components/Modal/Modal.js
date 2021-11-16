import "./Modal.css";
function Modal(props) {
  //   if(props.errorCode == 1)
  console.log(props.errorCode);
  const onClickHandler = (event) => {
    props.clickModal(0);
  };
  return (
    <div
      className={`modal ${props.errorCode === 1 ? "show" : "hide"}`}
      onClick={onClickHandler}
    >
      <div className="modal-content"> hello </div>
    </div>
  );
}

export default Modal;
