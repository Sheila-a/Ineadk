import design from './navbar.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={design.navbar}>
      <div className={design.Nav_container}>
        <Link to='/'>
          <h1>
            GIG<span>Nexus</span>
          </h1>
        </Link>

        <div>
          <div className={design.Nav_inner_container}></div>
        </div>
        <div className={design.BT}>
          <Link to='/login'>Login</Link>
          <Button content='Signup' route='/role-selection' />
        </div>
      </div>
    </div>
  );
};
export default Nav;
