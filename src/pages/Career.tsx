import styles from './Career.module.css';
import siccLogo from './../assets/icon/sicc.png';

const Career = (props: { careerRef: React.RefObject<HTMLElement> }) => {

    return (
        <section className={styles.career} ref={props.careerRef}>
            <div className="content">  
                <div className="title"><p>CAREER</p></div>
                <div className={styles.box}> 
                    <div className={styles.detail}>
                        <div className={styles.header}>
                            <img src={siccLogo} className={styles.logo}/>
                            <div className={styles.info}>
                                <div>Ssangyong Information & Comunication</div>
                                <div>
                                    <div className="bold">Full-Stack Web Developer</div>
                                    <div>Mar 2012 - Jan 2016 | 3 yr 7 mon </div>
                                    <div>Seoul, South Korea</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.introduction}>
                                Ssangyong Information & Communications(SICC) is a company that provides sports ICT solutions. 
                                They specialize in developing and operating comprehensive information systems for various international sports competitions.
                                As a member of the sports team, my role involved designing and creating the various sports games official websites.
                            </div>
                            <div>
                                <ul>
                                    <h3>▎ Projects </h3>
                                    <li>Pyeong Chang Winter Olympic Games</li>
                                    <li>6th CISM World Games </li>
                                    <li>Incheon Martial Arts Games/Asian Games</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Career;