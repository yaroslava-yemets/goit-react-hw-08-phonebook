import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import s from './Appbar.module.css';

const Appbar = () => (
    <header className={s.header}>
        <Navigation />
        <AuthNav />
        <UserMenu />
    </header>
);

export default Appbar;