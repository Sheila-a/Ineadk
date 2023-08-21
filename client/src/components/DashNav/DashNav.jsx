import design from './dashNav.module.css';
import { useRole } from '../../context/RoleContext';
import ConnectBtn from '../ConnectButton/ConnectButton';
const DashNav = ({ title, name }) => {
  const { user } = useRole();


  return (
    <div className={design.DashNav}>
      <div className={design.DashNav_inner}>
        <h1>{title}</h1>
        <div>
          <img src={user.avatarUrl} />
          <ConnectBtn content='Connect Wallet'/>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
