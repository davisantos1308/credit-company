import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { LayoutPrimary } from './layout/layout-primary/layout-primary.tsx'
import { Home } from './pages/home/home.tsx'
import { LayoutRegister } from './layout/layout-register/layout-register.tsx'
import { Login } from './pages/login/login.tsx'
import { Register } from './pages/register/register.tsx'
import { Produto } from './pages/produto/produto.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Navigate to={"/home"}/>
      },
      {
        path: "/login",
        element: (
          <LayoutRegister>
            <Login/>
          </LayoutRegister>
        )
      },
      {
        path: "/register",
        element: (
          <LayoutRegister>
            <Register/>
          </LayoutRegister>
        )

      },
      {
        path: "/home",
        element: (
          <LayoutPrimary>
            <Home/>
          </LayoutPrimary>
        )
      },
      {
        path: "/produtos",
        element: (
          <LayoutPrimary>
            <Produto/>
          </LayoutPrimary>
        ),
        children: [
          {
            path: ":id",
            element: <Produto/>
          }
        ]
      },
      {
        path: "/sobre",
        element: (
          <LayoutPrimary>
            {/* <h1>Sobre</h1> */}
            <Home/>
          </LayoutPrimary>
        )
      },
      {
        path: "/sac",
        element: (
          <LayoutPrimary>
            {/* <h1>SAC</h1> */}
            <Home/>
          </LayoutPrimary>
        )
      },
      {
        path: "/termos",
        element: (
          <LayoutPrimary>
            {/* <h1>Termos</h1> */}
            <Home/>
          </LayoutPrimary>
        )
      },
      {
        path: "/ajuda",
        element: (
          <LayoutPrimary>
            {/* <h1>Ajuda</h1> */}
            <Home/>
          </LayoutPrimary>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
