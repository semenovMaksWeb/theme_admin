import React from 'react';
import  "./styles/main.css"
import {RouteConfig as Router} from "./router";
import {AlertWrapper} from "./components/alert/alert_wrapper/alert_wrapper";

function App() {
  return (
    <>
        <main>
            <Router/>
            <AlertWrapper/>
        </main>
    </>
  );
}

export default App;
