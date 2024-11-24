import logo from './assets/logo1.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
const NavBar =()=>{
    return(
        <nav className="NavBar">
            <Link to='/'>
            <img src={logo} alt="Logo de Creaciones Normis" />
            </Link>
            <div className="Categories">
                <NavLink to={`/category/guardapolvos`} className={({isActive})=> isActive ? 'ActiveOption ' : 'Option'}>Guardapolvos</NavLink>
                <NavLink to={`/category/invierno`} className={({isActive})=> isActive ? 'ActiveOption ' : 'Option'}>Invierno</NavLink>
                <NavLink to={`/category/otros`} className={({isActive})=> isActive ? 'ActiveOption ' : 'Option'}>Otros</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar