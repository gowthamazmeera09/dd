import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VendorLogin from './vendorDashboard/components/forms/VendorLogin.jsx'
import VendorRegister from './vendorDashboard/components/forms/VendorRegister.jsx';

var router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/VendorLogin",
        element:<VendorLogin></VendorLogin>
      },
      {
        path:"/VendorRegister",
        element:<VendorRegister></VendorRegister>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> 
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
