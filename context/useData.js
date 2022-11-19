// import createPersistedState from 'use-persisted-state'
// const useAuthState = createPersistedState('auth')
// const useTokenState = createPersistedState('token')

import { useEffect, useState } from "react";

const useData = () => {
  // const [user, setUser] = useAuthState(null)
  // const [token, setToken] = useTokenState(null)
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const signOut = () => {
    setUser(null);
    setToken(null);
  };

  return {
    user,
    setUser,
    token,
    setToken,
    signOut,
  };
};

export default useData;
