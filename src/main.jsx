import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


//Provider
import { ClerkProvider } from '@clerk/clerk-react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import store from './store/store.js'


//pages/layout
import AppLayout from './AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import CardProductPage from './pages/CardProductPage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'



// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout />,
    errorElement : <div>Error Page ShopElectron</div>,
    children : [
      {
        path : '/',
        element : <HomePage />
      },
      {
        path : '/productDetails/:id',
        element : <ProductDetailsPage />
      },
      {
        path : '/cardProducts',
        element : <CardProductPage />
      },
      {
        path : '/favorites',
        element : <FavoritesPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
     <Provider store={store}>
        <RouterProvider router={router}>
            <AppLayout />
        </RouterProvider>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)
