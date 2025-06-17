import React from "react";
import { useContext } from "react";
import { useState } from "react";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [login, setLogin] = useState(
    localStorage.getItem("login") ? true : false
  );
  const [token, setToken] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : {}
  );
  const handleLogin = (token) => {
    setLogin(true);
    localStorage.setItem("login", "true");
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };
  const handleLogOut = () => {
    setLogin(false);
    localStorage.removeItem("login");
    setToken("");
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ login, token, handleLogin, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export const useAuthContext = () => useContext(AuthContext);
// import React, { useContext, useState } from "react";

// export const AuthContext = React.createContext();

// function AuthProvider({ children }) {
//   const [login, setLogin] = useState(localStorage.getItem("login") === "true");
//   const [token, setToken] = useState(
//     localStorage.getItem("token")
//       ? JSON.parse(localStorage.getItem("token"))
//       : {}
//   );

//   const handleLogin = (token) => {
//     setLogin(true);
//     localStorage.setItem("login", "true");
//     setToken(token);
//     localStorage.setItem("token", JSON.stringify(token)); // ← FIX
//   };

//   const handleLogOut = () => {
//     setLogin(false);
//     localStorage.removeItem("login");
//     setToken("");
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ login, token, handleLogin, handleLogOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;
// export const useAuthContext = () => useContext(AuthContext);
