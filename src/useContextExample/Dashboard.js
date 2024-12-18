import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Dashboard() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>{user}</h1>
      <h2>User Context</h2>
    </>
  );
}

export default Dashboard;
