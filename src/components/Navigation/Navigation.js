import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
    <>
        <NavLink 
            to='/'
            exact
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Home
        </NavLink>
        <NavLink 
            to='/register'
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Register
        </NavLink>
        <NavLink 
            to='/login'
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Login
        </NavLink>
        <NavLink 
            to='/contacts'
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Contacts
        </NavLink>
    </>
);

export default Navigation;