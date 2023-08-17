import { useLocation, Navigate } from 'react-router-dom';
import { Landing } from '../pages/Landing/Landing';
import { useRole } from '../context/RoleContext';

function PrivateRoutes() {
  const { auth } = useRole;
  const { location } = useLocation();

  return auth?.success ? (
    <>
      <Landing />
    </>
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}

export default PrivateRoutes;
