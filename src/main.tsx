import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './pages/App.tsx'
import NavBar from './components/NavBar.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Diary from './pages/Diary.tsx';
import Chat from './pages/Chat.tsx';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "message",
        element: <Diary />
      },
      {
        path: "chat",
        element: <Chat />
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "blog",
        element: <Blog/>
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
