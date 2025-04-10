import '../css/Navbar.css'
import imagenSRC from '../assets/src/assets/coffee-beans-filled-roast-brew-svgrepo-com.svg'
import CartWidget from './CartWidget'

const Navbar = () => {
    return(
        <nav style={{display:"flex", justifyContent:'space-around', alignItems:'center', padding:'2rem', color:"black", backgroundColor:'grey'}}>
            <a className="nav-link" href="">
                {/* imagen en public */}
                <img src='../src/assets/coffee-beans-filled-roast-brew-svgrepo-com.svg' alt='logo' className='logo'/>
                {/* imagen de src */}
                {/* <img src={imagenSRC} alt='logo' className='logo'/> */}
            </a>
            <a  className="nav-link" href="">Nuevos</a>
            <a  className="nav-link" href="">Mas vendidos</a>
            <a  className="nav-link" href="">Ofertas</a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar
