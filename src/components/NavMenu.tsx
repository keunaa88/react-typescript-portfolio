import styles from './NavMenu.module.css';

interface propsType {
    menu: string,
    selectedMenu: string,
    onClick: () => void;
}

const NavMenu = (props: propsType) => {
    console.log(props.menu, props.selectedMenu)
    return (
        <li>
            <a 
                className={
                    props.selectedMenu == props.menu.toLocaleLowerCase() ? 
                    styles.selected : ''
                }
                onClick={props.onClick}
                id={props.menu}>{props.menu} 
            </a>
        </li>
    )
}

export default NavMenu;