import styles from './Skills.module.css';
import React from 'react';

const Skills = (props: { skillsRef: React.RefObject<HTMLElement> }) => {

    return (
        <section className={styles.skills} ref={props.skillsRef}>
            <div className="content">
                <div className="title"><p>SKILLS</p></div>
            </div>
            
        </section>
    )

}

export default Skills;