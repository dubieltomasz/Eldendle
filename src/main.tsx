import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import WeaponGuesser from './routes/WeaponGuesser';
import CraftingGuesser from './routes/CraftingGuesser.tsx';
import './index.css'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <WeaponGuesser /> }
    ],
  }, {
    path: '/craftingguesser/',
    element: <App />,
    children: [
      { index: true, element: <CraftingGuesser /> }
    ],
  },],
  { basename: '/eldendle/', }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
