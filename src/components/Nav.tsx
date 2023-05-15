import styles from './Nav.module.css'
import { RefObject, useEffect, useRef, useState } from 'react'
import NavMenu from './NavMenu';


type NavProps = {
    mainRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    careerRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
  };

const useScroll = () => {
    const [state, setState] = useState({
        x: 0, y: 0
    })
    const onScroll = () => {
        setState({x: window.scrollX, y: window.scrollY});
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
    return state;
}

const Nav = (props : {refs: NavProps}) => {

    const [isDark, setIsDark] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('home');
    const position = {
        modeChangePosition : 500,
        aboutPosition: props.refs.aboutRef.current? props.refs.aboutRef.current.offsetTop - 5  : 0,
        skillsPosition : props.refs.skillsRef.current? props.refs.skillsRef.current.offsetTop - 5 : 0,
        careerPosition : props.refs.careerRef.current? props.refs.careerRef.current.offsetTop - 5 : 0,
        projectsPosition : props.refs.projectsRef.current? props.refs.projectsRef.current.offsetTop - 5 : 0,
    }

    const {x, y} = useScroll();
    useEffect(() => {
      
        // menu theme change
        y < position['modeChangePosition'] ? setIsDark(false) : setIsDark(true);

        // selected menu change
        if(y <= position['aboutPosition']) {
            setSelectedMenu('home');
        } else if ( y >= position['aboutPosition'] && y < position['skillsPosition']) {
            setSelectedMenu('about me');
        } else if ( y >= position['skillsPosition'] && y < position['careerPosition']) {
            setSelectedMenu('skills');
        } else if ( y >= position['careerPosition'] && y < position['projectsPosition']) {
            setSelectedMenu('career');
        } else {
            setSelectedMenu('projects');
        }
    }, [y]);



    const handleClick = (value: string) => {
       type RefType = { [key:string]: RefObject<HTMLElement> };
       const Ref: RefType = { 
                'home'  : props.refs.mainRef, 
                'about me':  props.refs.aboutRef,
                'skills':  props.refs.skillsRef,
                'career':  props.refs.careerRef,
                'projects':  props.refs.projectsRef
            };

       Ref[value]?.current?.scrollIntoView({ behavior: 'smooth' });
       setSelectedMenu(value);
    }

    return (
        <section className={`${styles.header} ${isDark ? styles.dark : ''}`}>
            <div className={`${styles.navbar} navbar`} >
                <ul>
                    <NavMenu menu='HOME' onClick={() => handleClick('home')} selectedMenu={selectedMenu}></NavMenu>
                    <NavMenu menu='ABOUT ME' onClick={() => handleClick('about me')} selectedMenu={selectedMenu}></NavMenu>
                    <NavMenu menu='SKILLS' onClick={() => handleClick('skills')} selectedMenu={selectedMenu}></NavMenu>
                    <NavMenu menu='CAREER' onClick={() => handleClick('career')} selectedMenu={selectedMenu}></NavMenu>
                    <NavMenu menu='PROJECTS' onClick={() => handleClick('projects')} selectedMenu={selectedMenu}></NavMenu>
                </ul>
            </div>
        </section>
        
    )

}

export default Nav;
