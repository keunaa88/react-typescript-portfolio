import { useEffect, useState } from 'react';
import styles from './Introduction.module.css';
import Modal from './Modal';
import EduDetail from './EduDetail'; 
import TafeLogo from './../assets/icon/tafe.jpg';
import KauLogo from './../assets/icon/kau.png';

interface propsType {
    text:string;
    icon: React.ReactNode;
    link?:string;
    style?: string;
    isButton?: boolean;
}

const Introduction = (props:propsType) => {

    const [isModal, setIsModal] = useState(false);


    const handleClickMore = () => {
        setIsModal(true);
        
    }
    const closeModal = () => {
        setIsModal(false);
    }

    useEffect(() => {
        if(isModal)
            document.body.style.overflow = 'hidden';
        else 
            document.body.style.overflow = 'unset';
     }, [isModal]);


    const html = props.link ? `<a href=${props.link}>${props.text}</a>` : props.text;
    return (
        <div className={styles.info}>
            <div>{props.icon}</div> 
                <div className={`${styles.text} ${props.style === 'sml' ? styles.sml : ''}`} dangerouslySetInnerHTML={{ __html: html}}></div>
                {
                    props.isButton &&
                    <button className={styles.moreBtn} onClick={handleClickMore}>More</button>
                }
            
            { isModal &&
                <Modal 
                    isModal={isModal} 
                    closeModal={closeModal}
                    title="Education"
                    contents={
                            <>
                                <EduDetail 
                                    logo={TafeLogo} 
                                    period="Feb 2018 - Dec 2018" 
                                    school="North Metropolitan Tafe, Perth, Australia"
                                    major="Diploma of Software Development" />
                                <EduDetail 
                                    logo={TafeLogo} 
                                    period="Feb 2017 - Dec 2017" 
                                    school="North Metropolitan Tafe, Perth, Australia"
                                    major="Certificate IV in Programming" />
                                <EduDetail 
                                    logo={KauLogo}  
                                    period="Mar 2007 - Feb 2012" 
                                    school="Korea Aerospace University, South Korea"
                                    major="Information & Telecommunication" />
                            </>
                    }
                ></Modal>
            }
        </div>
    )
}


export default Introduction;