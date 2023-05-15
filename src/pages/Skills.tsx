import styles from './Skills.module.css';
import React from 'react';

const Skills = (props: { skillsRef: React.RefObject<HTMLElement> }) => {

    return (
        <section className={styles.skills} ref={props.skillsRef}>
            <div className="content">
                <div className="title"><p>SKILLS</p></div>
                <div className={styles.languages}>
                    <div className={styles.front}>
                        <p>Front-End</p>
                        <div className={styles.box}>
                            <div className={styles.html}></div>
                            <div className={styles.javascript}></div>
                            <div className={styles.css}></div>
                            <div className={styles.react}></div>
                            <div className={styles.angular}></div>
                            <div className={styles.jquery}></div>
                            <div className={styles.typescript}></div>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <p>Back-End</p>
                        <div className={styles.box}>
                            <div className={styles.node}></div>
                            <div className={styles.java}></div>
                            <div className={styles.spring}></div>
                            <div className={styles.c}></div>
                            <div className={styles.net}></div>
                        </div>
                    </div>
                    <div className={styles.others}>
                        <p>Others</p>
                        <div className={styles.box}>
                            <div className={styles.oracle} ></div>
                            <div className={styles.postgre}></div>
                            <div className={styles.mongo}></div>
                            <div className={styles.mssql}></div>
                            <div className={styles.git}></div>
                            <div className={styles.gitlab}></div>
                            <div className={styles.aws}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Skills;