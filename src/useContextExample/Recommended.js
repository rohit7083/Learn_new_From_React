import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Recommended() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Hello {user}</h1>

      <h1>recommendation</h1>
    </div>
  );
}

export default Recommended;
