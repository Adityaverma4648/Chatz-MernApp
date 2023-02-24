import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
         <BrowserRouter>       
                 <Route path="/" component={Home} exact />
                 <Route path="/chats" component={Chat} />

         </BrowserRouter>
  );
};

export default App;
