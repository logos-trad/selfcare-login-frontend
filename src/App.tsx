import React, { useEffect } from "react";
//import { setCookie, getCookie } from "./utils/cookie";
import Login from "./Modules/Login";


function App() {

  const token = 'dddd';


  useEffect(() => {

  }, []);

  if (token) {
    return <Login />;
  }
  return <div></div>

}

export default App;