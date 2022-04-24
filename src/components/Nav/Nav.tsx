import {FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {NavTop } from './style';
const Nav = () => {

    return (
        <NavTop>
            <Link to="/add" className='btn-add'>
                <FaPlus className='icon'/>
            </Link>
        </NavTop>
    )
}

export default Nav;