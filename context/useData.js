import createPersistedState from "use-persisted-state";
const useAuthState = createPersistedState("auth");
const useTokenState = createPersistedState("token");

const useData = () => {
  const [user, setUser] = useAuthState(null);
  const [token, setToken] = useTokenState(null);

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
