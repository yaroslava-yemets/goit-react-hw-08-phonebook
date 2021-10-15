import { NavLink } from 'react-router-dom';
import s from 'component-styles/NavLink.module.css';

const Navigation = () => (
    <div>
        <NavLink 
            to='/'
            exact
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Home
        </NavLink>
        <NavLink 
            to='/contacts'
            className={s.navLink}
            activeClassName={s.navActiveLink}
        >
            Contacts
        </NavLink>
    </div>
);

export default Navigation;