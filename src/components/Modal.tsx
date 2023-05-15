import styles from './Modal.module.css';


interface propsType {
    isModal: boolean;
    closeModal: () => void;
    title?: string;
    contents?: JSX.Element;
}

const Modal = (props: propsType) => {


    return (
        <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <div className={styles.close}><button className={styles.modalBtn} onClick={() => props.closeModal()}>X</button></div>
                        <div className={styles.title}>{props.title}</div>
                    </div>
                    <div className={styles.modalContent}>
                        {props.contents}
                        
                    </div>
                </div>
            </div>
    )
}

export default Modal;