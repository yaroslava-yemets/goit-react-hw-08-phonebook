import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
    <>
        <NavLink 
            to='/register'
            exact
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Register
        </NavLink>
        <NavLink 
            to='/login'
            exact
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Login
        </NavLink>
        <NavLink 
            to='/contacts'
            exact
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Contacts
        </NavLink>
    </>
);

export default Navigation;