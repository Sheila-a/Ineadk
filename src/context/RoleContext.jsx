import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const RoleContext = createContext({});

export function useRole() {
  return useContext(RoleContext);
}

export function RoleProvider({ children }) {
  const [role, setRole] = useState('');
  const [user, setUser] = useState({});
  const getInitialState = () => {
    const authString = sessionStorage.getItem('userAuth');
    const authDetails = JSON.parse(authString);
    return authDetails;
  };
  const [auth, setAuth] = useState(getInitialState);

  // useEffect(() => {
  //   sessionStorage.setItem('userAuth', JSON.stringify(auth));
  // }, [auth]);
  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      setUser(JSON.parse(storedUserDetails));
    }
  }, []);

  return (
    <RoleContext.Provider
      value={{ role, setRole, user, setUser, auth, setAuth }}
    >
      {children}
    </RoleContext.Provider>
  );
}

RoleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
