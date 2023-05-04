import styles from './Nav.module.css'
import { useRef } from 'react'
const Nav = () => {


    const aboutRef = useRef(null)
    //aboutRef.current.value

    return (
        <section className={styles.header}>
            <div className={styles.nav}>
                <ul>
                    <li><a href="#" ref={aboutRef} className={styles.selected}>HOME</a></li>
                    <li><a href="#">ABOUT ME</a></li>
                    <li><a href="#">CAREER</a></li>
                    <li><a href="#">PROJECTS</a></li>
                </ul>
            </div>
        </section>
        
    )

}

export default Nav;
