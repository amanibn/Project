import React from "react";
import './App.css';
import Home from './components/Home';
import Students from './components/Students';
import Teachers from './components/Teachers';
import Profile from "./components/Profile";
import Classes from './components/Classes';
import Meetings from "./components/Meetings";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

const routes = [
  {
    path: "/",
    sidebar: () => <div>home!</div>,
    main: () => <Home />
  },
  {
    path: "/teachers",
    sidebar: () => <div>teachers!</div>,
    main: () => <Teachers />
  },
  {
    path: "/students",
    sidebar: () => <div>students!</div>,
    main: () => <Students />
  },
  {
    path: "/classes",
    sidebar: () => <div>classes!</div>,
    main: () => <Classes />
  },
  {
    path: "/meetings",
    sidebar: () => <div>meetings!</div>,
    main: () => <Meetings />
  }
];

export default function App() {
  
  return (
    <>
    
      <div style={{ display: "flex" }}>
    
         <ProSidebar><Menu iconShape="square">
         <MenuItem>
              <img src="/logo.jpg" className="img-fluid" />
            </MenuItem>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/teachers">Teachers</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/students">Students</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/classes">Classes</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/meetings">Meetings</Link>
            </MenuItem>
          </Menu>
          </ProSidebar>
        
        

        <div style={{ flex: 1, padding: "10px" }}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<route.main />}
              />
              
            ))}
            <Route  path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
        
      </div>
      </>
   
  );
}
