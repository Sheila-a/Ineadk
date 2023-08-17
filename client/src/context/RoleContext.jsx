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
  //   const storedUserDetails = localStorage.getItem('userDetails');
  //   if (storedUserDetails) {
  //     setUser(JSON.parse(storedUserDetails));
  //   }
  // }, []);

  useEffect(() => {
    // Store user details including auth property in localStorage
    localStorage.setItem('userDetails', JSON.stringify(user));

    // Store auth property in sessionStorage
    sessionStorage.setItem('userAuth', JSON.stringify(auth));
  }, [user, auth]);

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
