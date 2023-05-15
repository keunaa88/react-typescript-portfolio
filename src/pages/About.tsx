import styles from './About.module.css';
import { ReactComponent as PersonIcon } from './../assets/icon/person.svg';
import { ReactComponent as GeoIcon } from './../assets/icon/location.svg';
import { ReactComponent as DocumentIcon } from './../assets/icon/document.svg';
import { ReactComponent as EmailIcon } from './../assets/icon/email.svg';
import { ReactComponent as PhoneIcon } from './../assets/icon/telephone.svg';
import { ReactComponent as EduIcon } from './../assets/icon/education.svg';
import { ReactComponent as Instagram } from './../assets/icon/instagram.svg';
import { ReactComponent as LinkedIn } from './../assets/icon/linkedIn.svg';
import { ReactComponent as Github } from './../assets/icon/github.svg';

import Introduction from './../components/Introduction';
import React from 'react';

const About =  (props: { aboutRef: React.RefObject<HTMLElement> }) => {

    const urls = {
        linkedIn: 'https://www.linkedin.com/in/euna-kim-ab3594139/',
        github: 'https://github.com/keunaa88',
        instagram: 'https://www.instagram.com/___kimuna/'
    }

    const education = 'Diploma in Software development <br/> Bachelor in Information & Telecommunication <br />';
    return (
        <section className={styles.about} ref={props.aboutRef}>
            <div className="content">
                <div className="title"><p>ABOUT ME</p></div>
                <div className={styles.introduction}>
                    <div className={styles.part1}>
                        <div className={styles.profile}></div>
                    </div>
                    <div className={styles.part2}>
                        <p >
                            A self-initiative <span className={styles.empasize}>full-stack web developer </span> 
                            with <span className={styles.empasize}>5</span> years' experience of building web applications using multiple languages and databases<br />
                            Previous leader of a HTML community over <span className={styles.empasize}>10,000</span> members when I was just<span className={styles.empasize}> 14 </span> <br />
                            Strongly believe in the value of <span className={styles.empasize}>teamwork</span> and <span className={styles.empasize}>collaboration</span><br />
                            Love to push myself outside of my comfort zone and take on new <span className={styles.empasize}>challenges</span> <br />
                            Have a strong sense of <span className={styles.empasize}>responsibility</span><br />
                            Priority tasks effectively and strive to meet the deadlines no matter what<br />
                            {/* With over <span className={styles.empasize}>5</span> years of experience as a <span className={styles.empasize}>full-stack web developer</span><br />
                            Previous leader of a HTML community over <span className={styles.empasize}>10,000</span> members when I was just<span className={styles.empasize}> 14 </span> <br />
                            Strongly believe in the value of <span className={styles.empasize}>teamwork</span> and <span className={styles.empasize}>collaboration</span><br />
                            Love to push myself outside of my comfort zone and take on new <span className={styles.empasize}>challenges</span> <br />
                            Have a strong sense of <span className={styles.empasize}>responsibility</span><br />
                            Priority tasks effectively and strive to meet the deadlines no matter what<br /> */}
                        </p> 
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.row}>
                        <Introduction text='Euna Kim' icon={<PersonIcon width={35} height={35}/>}/>
                        <Introduction text='Sydney, NSW' icon={<GeoIcon width={30} height={30}/>}/>
                        <Introduction style='sml' text='Work Permission </br> No restrictions' icon={<DocumentIcon width={30} height={30} fill={'#1572A1'}/>}/>
                    </div>
                    <div className={styles.row}>
                        <Introduction text='keunaa88@gmail.com' icon={<EmailIcon width={30} height={30}/>} link='mailto:keunaa88@gmail.com'/>
                        <Introduction text='0482 835 873' icon={<PhoneIcon width={30} height={30}/>} link='tel:0482835873'/>
                        <Introduction style='sml' isButton={true} text={education} icon={<EduIcon width={30} height={30}/>}/>
                    </div>
                </div>
                <div className={styles.links}>
                    <a href={urls.linkedIn} target='_blank'><LinkedIn width="40" height="40" /></a>
                    <a href={urls.github} target='_blank'><Github width="40" height="40"/></a>
                    <a href={urls.instagram} target='_blank'><Instagram width="40" height="40"/></a>
                </div>
            </div>
        </section>
    )

}

export default About;