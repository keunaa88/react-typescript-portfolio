import styles from './Projects.module.css';

const Projects = (props: { projectsRef: React.RefObject<HTMLElement> }) => {

    return (
        <section className={styles.projects} ref={props.projectsRef}>
            <div className="content">
            </div>
        </section>
    )

}

export default Projects;