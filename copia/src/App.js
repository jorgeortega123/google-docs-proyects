import React from "react";
import FirstMain from "./components/FirstMain";
import Form from "./components/models/Form";
import Loading from "./components/models/Loading";
import Error from "./components/models/Error";
import Loggin from "./components/models/Loggin";
import PayMethods from "./components/models/PayMethods";
import Home from "./components/models/Home";
import LoginGoogleAuth from "./components/models/LoginGoogleAuth";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import dotenv from "dotenv"
dotenv.config()
//const server = process.env.SERVER

/*
<FirstMain />
<Textareainput />
<Options />
<MainPage />
<Buttons />*/
class App extends React.Component {
    state= { 
    init: false
  }
  componentDidMount(){ 
    const sa = localStorage.getItem("register")
    if (sa==="true") { 
      this.setState({ init: true });
    } else { 
      this.setState({ init: false });
    }
  }  

  page= ()=> { 
  if (this.state.init) {
    return (
      <React.Fragment>
        <FirstMain />
      </React.Fragment>
    )
  } else {
    return (
    <React.Fragment>
     <Loggin />
</React.Fragment>
)
}


  }
  render() { 
    return(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/error" element={<Error />} />
      <Route path="/login" element={<Loggin />} />
      <Route path="/form" element={<Form />} />
      <Route path="/loginid" element={<LoginGoogleAuth />} />
      <Route path="/buy" element={<PayMethods />} />

     
  

    </Routes>
  </BrowserRouter>

    //this.page()
    //<Loading  />
 ) }
}
export default App;
