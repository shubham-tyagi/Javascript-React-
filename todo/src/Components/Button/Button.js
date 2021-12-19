import styles from './Button.module.css'

const Button = function (props){
    
    return (
        <div>
            <button type={props.type} className={styles.btn} >{props.children}</button>
        </div>
    );
}

export default Button;