import logo from '../images/logo.svg';
import '../index.css';


function Header() {
    return (
        <div className="page__container">
            <div className="header">
                <img className="header__logo" src={logo} alt="логотип Mesto"/>
            </div>
        </div>
    );
}

export default Header;