import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import NavBar from './NavBar.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    children: [
      {
        path: "main",
        element: <App/>
      },
      {
        path: "test",
        element: <h1>test</h1>
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
