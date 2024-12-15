import React, { createContext, useState } from "react";
import ApiIntegrate from "./compo/ApiIntegrate";
import DataFetch1 from "./compo/DataFetch1";
import Datafetch2 from "./compo/Datafetch2";
import LocalStorageDemo from "./compo/LocalStorageDemo";
import Login from "./compo/demo/Login";
import CreateCategory from "./compo/demo/CreateCategory";
import { useContext } from "react";
import ChaildA from "./compo/ChaildA";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SimpleForm from "./reactHook/SimpleForm";
import ReduxUI from "./redux/ReduxUI";
import UseCase from "./useRefUseCase/UseCase";
import Stopwatch from "./useRefUseCase/Stopwatch";
import Example from "./useMemoDemo/Example";
import RegistrationForm from "./api_Integration/RegistrationForm";
import DataPage from "./api_Integration/DataPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from "./Projects/Test";
import Todo from "./Projects/Todo";
import ValidationWithYup from "./Validation/ValidationWithYup";
import StopWatch from "./stopWatch/StopWatch";
import Sample from "./AddNewInputFields/Sample";
import FormValidation from "./Validation/FormValidation";
import FormSample from "./Validation/FormSample";
import FormSample2 from "./Validation/FormSample2";
import FormContextProvider from "./Validation/Context/FormContextProvider";
import Form1 from "./PassData/Form1";
import Form2 from "./PassData/Form2";

// import Home From './compo/Routing';
// steps1: Create Context
// const UserContext = createContext();
//  steps2:  wrap all the child  inside a provider
//  steps3:pass value
//  steps4:consumer k ander jaake consume karlo

// const themeContext = createContext();

/* ================== Routing ====================== */
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/student",
//     element: <Student />,

// this is children routing of studensts
// if u want to work this smoothly u have to add <outlet/> in student page at the end

//     children:[
//       {
//         path:"/courses",
//         element:<courses/>,
//       },{
//         path:"/reports",
//         element:<Reports/>
//       }
//     ]
//   },
// ]);
function App() {
  // const [user, setuser] = useState({name:"Love"})
  // const [theme, settheme] = useState("light");

  return (
    <div className="App">
      {/* <ApiIntegrate/> */}
      {/* <DataFetch1/> */}
      {/* <Datafetch2/> */}
      {/* <LocalStorageDemo/> */}
      {/* <Login/> */}
      {/* <CreateCategory/>  */}
      {/* <SimpleForm/> */}
      {/* <ReduxUI/> */}
      {/* <UseCase/> */}
      {/* <Stopwatch /> */}
      {/* <Example/> */}

      {/* <RegistrationForm/> */}
      {/* <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/data" element={<DataPage />} />
      </Routes>
    </Router> */}

      {/* <Test/> */}
      {/* <Todo/>
<Test/> */}

      {/* <ValidationWithYup/> */}
      {/* <StopWatch/> */}
      {/* <FormValidation/> */}
      {/* <FormSample/> */}
      {/* <Sample/> */}

      {/* <FormContextProvider><Router>
      <Routes>
        <Route path="/" element={<FormSample />} />
        <Route path="/FormSample2" element={<FormSample2 />} />
      </Routes>
    </Router>

    </FormContextProvider> */}

      <Router>  
        <Routes>
          <Route path="/" element={<Form1 />} />
          <Route path="/Form2" element={<Form2 />} />
        </Routes>
      </Router>

      {/* ================ useContext ===================== */}
      {/* <UserContext.Provider value={user}>
        <ChaildA/>
      </UserContext.Provider> */}

      {/* <themeContext.Provider value={{ theme, settheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "darkblue" }}
        >
          <ChaildA />
        </div>
      </themeContext.Provider> */}

      {/* ================== Routing ====================== */}

      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
// export {UserContext}
// export { themeContext };
