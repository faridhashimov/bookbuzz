import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { MainPage, Cart, LoginPage, ProductPage, Success } from './pages'

import './App.css'
import { Footer, Navbar } from './components'

function App() {
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
                    element: <MainPage />,
                },
                {
                    path: '/:product',
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
