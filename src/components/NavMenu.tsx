import styles from './NavMenu.module.css';

interface propsType {
    menu: string,
    selectedMenu: string,
    onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const NavMenu = (props: propsType) => {
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