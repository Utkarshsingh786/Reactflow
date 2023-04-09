import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/Home.jsx';
// import Modules from './Pages/Modules/Modules.jsx'
import DnDFlow from './Pages/Dragndrop/Drag.jsx';
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/modules/:name" element={<DnDFlow />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
