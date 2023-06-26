import { Link } from 'react-router-dom'
import logo from '../../assets/BookBuzz-1.png'
import styles from './Navbar.module.css'
import { useDebounce } from '../../hooks/useDebounce'
import { useGetSearchedProductsQuery } from '../../redux/bookbuzzApi'
import { useState } from 'react'
import { SearchDropdown } from '../../components'
import { books } from '../../books'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/userSlice'

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    const debouncedSearchQuery = useDebounce(searchTerm, 500)
    const {
        data: searchedProducts = [],
        isError,
        isLoading,
        error,
    } = useGetSearchedProductsQuery(debouncedSearchQuery, {
        skip: debouncedSearchQuery.length < 2,
    })

    const handleLogOut = () => {
        try {
            dispatch(logOut())
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.leftBar}>
                        <Link className={styles.logo} to={'/'}>
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className={styles.searchBar}>
                            <input
                                className={styles.searchInput}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                type="text"
                                placeholder="Search for books by title, author, or keyword"
                            />
                            <div className={styles.iconContainer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 50 50"
                                    width="50px"
                                    height="50px"
                                >
                                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
                                </svg>
                            </div>
                            {searchTerm.length > 0 && searchedProducts.length > 0 && (
                                <SearchDropdown
                                    // items={searchedProducts}
                                    items={searchedProducts}
                                    isLoading={isLoading}
                                    isError={isError}
                                    error={error}
                                />
                            )}
                        </div>
                    </div>
                    <div className={styles.rightBar}>
                        {/* <div className={styles.cart}> */}
                        <Link className={styles.cart} to={'/cart'}>
                            Cart
                        </Link>
                        {/* </div> */}
                        {!user ? (
                            <Link className="btn" to={'/login'}>
                                Login
                            </Link>
                        ) : (
                            <Link className="btn" onClick={handleLogOut}>
                                Log Out
                            </Link>
                        )}

                        <div className={styles.profile}>
                            <img
                                className={styles.profileImage}
                                src="https://randomuser.me/api/portraits/men/8.jpg"
                                alt="avatar"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
