import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Posdcast() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Hello {user}</h1>
      Posdcast
    </>
  );
}

export default Posdcast;
