import styles from './Main.module.css';
import bgImg from './../assets/image/bg3.jpg';
import downloadIcon from './../assets/icon/pdf.png';
import arrowDownIcon from './../assets/icon/arrowdown_white.png';
import { useRef } from 'react';

const Main = () => {

    const aRef = useRef<HTMLAnchorElement>(null);
    const path =  './../assets/file/resume.pdf'// Replace with the URL of the file to download
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

    // const onDownload = async () => {
    //     const downloadResult = await fetch(path);
    //     const blob = await downloadResult.blob();
    //     saveAs(blob, "이력서_이성혁(Java_Backend).pdf");
    //   };


    return (
        <section className={styles.main}>
            <div>
                <p className={`${styles.greeting} ${styles.animate_up}`}>Hello, <br /> I'm Euna Kim.
                < br/>A Full-Stack Web Developer</p>
                <p className={`${styles.location} ${styles.animate_up}`}>Based in Sydney, Australia </p>

                <a href={path} ref={aRef} download="resume.pdf" hidden/>
                <button type="button" onClick={handleDownload}><img src={downloadIcon} className={styles.fileIcon}/><span>RESUME</span></button>
                <img src={arrowDownIcon} className={styles.arrowIcon}/>
                <img src={bgImg}/>
            </div>
            
        </section>
    );
}

export default Main;