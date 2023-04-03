import './Navbar.scss'
import logo from '../../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'


export const Navbar = ({red}) => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header" style={{backgroundColor: red ? 'red' : 'darkcyan'}}>
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'/>

                <nav className="navbar">
                    <Link to='/' className="navbar__link">Inicio</Link>
                    <Link to='/destinos/america' className="navbar__link">America</Link>
                    <Link to='/destinos/europa' className="navbar__link">Europa</Link>
                    <Link to='/destinos/asia' className="navbar__link">Asia</Link>
                    <Link to='/destinos/africa' className="navbar__link">Africa</Link>
                    <Link to='/destinos/oceania' className="navbar__link">Oceania</Link>
                    <Link to='/promociones' className="navbar__link">Promociones</Link>
                    <Link to='/nosotros' className="navbar__link">Nosotros</Link>
                </nav>

                <CartWidget />
            </div>
            <div className='user'>
                <h6>Bienvenido: {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}