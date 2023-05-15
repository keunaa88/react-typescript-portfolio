import styles from './Main.module.css';
import { RefObject, useRef } from 'react';
import { ReactComponent as fileIcon } from './../assets/icon/file-download.svg';


const Main = (props: {mainRef: RefObject<HTMLElement>, aboutRef: RefObject<HTMLElement>}) => {

    const aRef = useRef<HTMLAnchorElement>(null);
    const path =  './../assets/file/resume.pdf'
    const handleDownload = async () => {
        try {
            const downloadResult = await fetch(path);
            if (!downloadResult.ok) {
              throw new Error('Failed to download file');
            }
            const blob = await downloadResult.blob();
            const fileURL = window.URL.createObjectURL(blob);
            if (aRef.current) {
              aRef.current.href = fileURL;
              aRef.current.click();
              window.URL.revokeObjectURL(fileURL);
            }
          } catch (error) {
            console.error(error);
          }
      
    };

    const handleScrollDown = () => {
      props.aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    

    return (
        <section className={styles.main} ref={props.mainRef}>
            <div>
                <p className={`${styles.greeting} ${styles.animate_up}`}>
                    Hello, <br /> 
                    I'm Euna Kim. < br/>
                    A Full-Stack Web Developer
                </p>
                <p className={`${styles.location} ${styles.animate_up}`}>Based in Sydney, Australia </p>
                <a href={path} ref={aRef} download="resume.pdf" hidden/>
                <button type="button" className={styles.downloadBtn} onClick={handleDownload} ><i className={styles.fileIcon} /><span>Download Resume</span></button>
                <div onClick={handleScrollDown} ><i className={styles.arrowIcon}/></div>
                <div className={styles.bgImg}/>
            </div>
        </section>
    );
}

export default Main;