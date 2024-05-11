import styles from './ButtonB.module.css'


function ButtonB({ text, link }) {
     const handleClick = () => {
        window.open(link, '_blank');
    };
    return (
        <div>
            <button className={styles.btn} onClick={handleClick}>{text}</button>

        </div>
    )
}

export default ButtonB