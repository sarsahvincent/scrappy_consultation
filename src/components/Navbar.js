import { Link } from 'react-router-dom';
import Chat from '../assets/images/chat.png';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar-containr'>
        <div className='nav_link'>
          <Link to='/#home'>
            <p>Home</p>
          </Link>
        </div>
        <div className='nav_link'>
          <Link to='/#services'>
            <p>Services</p>
          </Link>
        </div>

        <div className='nav_link'>
          <Link to='/#about'>
            <p>About</p>
          </Link>
        </div>
        <div className='nav_link'>
          <Link to='/#contact'>
            <p>Contact Us</p>
          </Link>
        </div>
        <div className='nav_link'>
          <Link to='/#comment'>
            <img color='red' src={Chat} alt='chat' width='30' height='30' />
          </Link>
        </div>
      </nav>
    </div>
  );
}
