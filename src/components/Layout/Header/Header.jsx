import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { GiBullHorns } from 'react-icons/gi';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <header className={styles['header']}>
      <Link to='/'>
        <div>
          <h1>
            <GiBullHorns className={styles['home-icon']} />
          </h1>
        </div>
      </Link>
      <nav className={styles['nav']}>
        <ul className={styles['nav-links']}>
          <Link to='/'>
            <li className={styles['nav-links__link']}>More about me</li>
          </Link>
          <Link to='/'>
            <li className={styles['nav-links__link']}>Contact</li>
          </Link>
          <Link to='/'>
            <li className={styles['nav-links__link']}>CV</li>
          </Link>
        </ul>
        <button className={styles['menu-button']}>
          <GiHamburgerMenu className={styles['burger-icon']} />
        </button>
      </nav>
    </header>
  );
};
export default Header;
