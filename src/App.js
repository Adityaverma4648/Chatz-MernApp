import React from "react";
import {BrowserRouter,Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
         <BrowserRouter>
             <Sidebar />
       
                 <Route path="/" component={Home} exact />
                 <Route path="/chats" component={Chat} />

         </BrowserRouter>
  );
};

export default App;
