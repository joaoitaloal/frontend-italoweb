import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import NavBar from './NavBar.tsx';
import ErrorPage from './components/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "home",
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
