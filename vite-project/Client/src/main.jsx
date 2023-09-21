import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes.jsx';
import Context from './Component/Context/Context.jsx';
import { Provider } from 'react-redux';
import Store from './Redux/Store.jsx';
const router = createBrowserRouter(Routes)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <React.StrictMode>
    <Context>
    <RouterProvider router={router} />
    </Context> 
  </React.StrictMode>,
  </Provider>
  
)
