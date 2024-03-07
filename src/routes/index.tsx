import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

export const ROUTES = {
  HOME: '/',
}

const Home = lazy(() => import('@/pages/home'))
const Login = lazy(() => import('@/pages/login'))
const Error = lazy(() => import('@/pages/error'))

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <Navigate to={ROUTES.HOME} /> },
  { path: '/login', element: <Login /> },
  { path: '/error', errorElement: <Error /> }
])
