import styles from './Button.module.css'

const Button = function (props){
    const onClickHandler = function(event){
        props.handleClick();
    }
    return (
        <div>
            <button type={props.type} className={styles.btn} onClick={onClickHandler}>{props.children}</button>
        </div>
    );
}

export default Button;