import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { GiBullHorns } from 'react-icons/gi';
import { FaHamburger } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Link to='/'>
        <h1>
          <GiBullHorns />
        </h1>
      </Link>
      <nav>
        <ul className={styles['navLinks']}>
          <Link to='/'>
            <li className={styles['navLinks__link']}>
              More about <span>me</span>
            </li>
          </Link>
          <Link to='/'>
            <li className={styles['navLinks__link']}>Contact</li>
          </Link>
          <Link to='/'>
            <li className={styles['navLinks__link']}>CV</li>
          </Link>
          <button>
            <FaHamburger />
          </button>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
