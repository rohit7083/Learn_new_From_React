import React, { createContext, useState } from "react";
import FormComponent from "./compo/FormValidation";
import ApiIntegrate from "./compo/ApiIntegrate";
import DataFetch1 from "./compo/DataFetch1";
import Datafetch2 from "./compo/Datafetch2";
import LocalStorageDemo from "./compo/LocalStorageDemo";
import Login from "./compo/demo/Login";
import CreateCategory from "./compo/demo/CreateCategory";
import { useContext } from "react";
import ChaildA from "./compo/ChaildA";
// steps1: Create Context
// const UserContext = createContext();
//  steps2:  wrap all the child  inside a provider
//  steps3:pass value
//  steps4:consumer k ander jaake consume karlo

const themeContext = createContext();

function App() {
  // const [user, setuser] = useState({name:"Love"})
  const [theme, settheme] = useState("light");
  return (
    <div className="App">
      {/* <FormComponent /> */}
      {/* <ApiIntegrate/> */}
      {/* <DataFetch1/> */}
      {/* <Datafetch2/> */}
      {/* <LocalStorageDemo/> */}
      {/* <Login/>
      <CreateCategory/> */}

      {/* <UserContext.Provider value={user}>
        <ChaildA/>
      </UserContext.Provider> */}

      <themeContext.Provider value={{ theme, settheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "darkblue" }}
        >
          <ChaildA />
        </div>
      </themeContext.Provider>
    </div>
  );
}

export default App;
// export {UserContext}
export { themeContext };
