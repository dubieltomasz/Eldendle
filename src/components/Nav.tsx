import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <Link to='/' style={{textDecoration: 'none'}}><h2>Weapon Guesser</h2></Link>
            <Link to='/' style={{textDecoration: 'none'}}><h2 className='unavailable' title='Currently unavailable'>Boss Guesser</h2></Link>
            <Link to='/' style={{textDecoration: 'none'}}><h2 className='unavailable' title='Currently unavailable'>Crafting Guesser</h2></Link>
            <Link to='/' style={{textDecoration: 'none'}}><h2 className='unavailable' title='Currently unavailable'>Location Guesser</h2></Link>
        </nav>
    );
};

export default Nav;