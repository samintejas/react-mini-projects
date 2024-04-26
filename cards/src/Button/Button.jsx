import styles from './Button.module.css'

function Button(){

    const inlineStyles = {
        backgroundColor: "hsl(199, 14%, 56%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
    }

    return(
        <button className={styles.button}>Click me</button>
        // <button style={inlineStyles}>Click me</button>
    );
}

export default Button