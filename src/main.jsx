import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//pages/layout
import AppLayout from './AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    errorElement : <div>Error Page ShopElectron</div>,
    children : [
      {
        path : '/',
        element : <HomePage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <AppLayout />
    </RouterProvider>
  </React.StrictMode>,
)
