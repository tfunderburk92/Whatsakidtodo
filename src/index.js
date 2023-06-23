import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, BrowserRouter, Route, Routes } from 'react-router-dom';
import ActivityDetails from './ActivityDetails'; 
// import { Map, Marker} from 'pigeon-maps';   
import {Map,Market, MyMap} from './map'; 
const prepare = () => {
  if (process.env.NODE_ENV === 'development') {  // prevents the mock server from working in a deployed, production env
    const { worker } = require('./mocks/browser.js')
    return worker.start() // Comment out this return statement to disable the mock api
  }
  return Promise.resolve()
}

 MyMap(); 
// prepare().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>

    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<App />} />
        <Route path="/activity-details" element={<ActivityDetails />} />
      </Route>
    </Routes>
    </BrowserRouter>


      {/* <BrowserRouter>
        <Routes>
        <Route path="/">
            <App />
        </Route>


        <Route path="/activity-details">
          <p>Activity details</p>
        </Route>
        </Routes>


      </BrowserRouter> */}

    </React.StrictMode>
  );
// })



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
