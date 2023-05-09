import styles from './Introduction.module.css';

interface propsType {
    text:string;
    text2?:string;
    icon: React.ReactNode;
    link?:string;
}

const Introduction = (props:propsType) => {

    return (
        <div className={styles.info}>
            <div>{props.icon}</div> 
            { !props.text2 ?
                !props.link ? 
                    <div className={styles.text}>{props.text}</div> : <div className={styles.text}><a href={props.link}>{props.text}</a></div> 
                :
                <>
                    <div className={styles.smltext}>{props.text}</div>
                    <div className={styles.smltext}>{props.text2}</div>
                </>
            }
        </div>
    )
}


export default Introduction;