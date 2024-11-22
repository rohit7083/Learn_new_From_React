import React from 'react';
import FormComponent from './compo/FormValidation';
import ApiIntegrate from './compo/ApiIntegrate';
import DataFetch1 from './compo/DataFetch1';
import Datafetch2 from './compo/Datafetch2';
import LocalStorageDemo from './compo/LocalStorageDemo';
import Login from './compo/demo/Login';
import CreateCategory from './compo/demo/CreateCategory';

function App() {
  return (
    <div className="App">
      {/* <FormComponent /> */}
      {/* <ApiIntegrate/> */}
      {/* <DataFetch1/> */}
      {/* <Datafetch2/> */}
      {/* <LocalStorageDemo/> */}

      <Login/>
      <CreateCategory/>

    </div>
  );
}

export default App;
