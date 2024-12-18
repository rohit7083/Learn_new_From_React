import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function Home() {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <div>
        <h1>Hello {user}</h1>
        <button
          type="submit"
          className="border bg-slate-300"
          onClick={() => setUser("Rohit")}
        >
          Chanage Name
        </button>
      </div>
      <Link to="/dashboard">Your Dashboard</Link>
      <Link to="/recommendation">Your Recommendation</Link>
      <Link to="/podcast">Your Podcast</Link>
    </>
  );
}

export default Home;
