import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Header } from './header.jsx'
import './header_styles.css'
// import { UseEffect } from './UseEffect.jsx'
import { RickAndMorty } from './pages/RickAndMorty.jsx'
import { Detalles } from './pages/Detalles.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RickAndMorty/>,
  },
  {
    path: "/info/:id",
    element: <Detalles/>,
  }
]);


createRoot(document.getElementById('root')).render
(
<StrictMode>
<RouterProvider router={router}/>
</StrictMode>


);
