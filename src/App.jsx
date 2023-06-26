import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from 'react-router-dom'
import { MainPage, Cart, LoginPage, ProductPage, Success } from './pages'

import './App.css'
import { Footer, Navbar } from './components'
import { useSelector } from 'react-redux'

function App() {
    const user = useSelector((state) => state.user.user)

    const Layout = () => {
        return (
            <div className="app">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: user ? (
                        <MainPage />
                    ) : (
                        <Navigate to="/login" replace />
                    ),
                },
                {
                    path: '/product/:id',
                    element: <ProductPage />,
                },
                {
                    path: '/cart',
                    element: <Cart />,
                },
            ],
        },
        {
            path: '/login',
            element: <LoginPage />,
        },
        {
            path: '/success',
            element: <Success />,
        },
    ])
    return <RouterProvider router={router} />
}

export default App
