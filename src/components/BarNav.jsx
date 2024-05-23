import confLogo from '../assets/img/Melon.png';
import CartPreview from './CartPreview';
import Search from './Search';
import { Link } from 'react-router-dom';
import BarNavMenu from './BarNavMenu';
import './styles/Barnav.css';
 
function BarNav () {
    return(
        <header>
            <div className="nav-elements-container">
                <BarNavMenu />
                <CartPreview />
            </div> 
        </header>
    )
}

export default BarNav;