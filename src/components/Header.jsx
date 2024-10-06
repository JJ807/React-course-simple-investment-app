import logo from '../assets/investment-calculator-logo.png';

function Header({ headerName }) {
    return (
        <header id="header">
            <h1>{headerName}</h1>
            <img src={logo} alt="Logo showing a money bag" />
        </header>
    );
}

export default Header;