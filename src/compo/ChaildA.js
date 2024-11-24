import React, { useContext } from "react";
import { themeContext, UserContext } from "../App";

function useContextDEMO() {
  // const user=useContext(UserContext);

  const { theme, settheme } = useContext(themeContext);
  function handleClick() {
    if (theme === "light") {
      settheme("dark");
    } else {
      settheme("light");
    }
  }
  return (
    <>
      {/* <h1>{user.name}</h1> */}

      <button onClick={handleClick}>clickk me </button>
    </>
  );
}

export default useContextDEMO;
