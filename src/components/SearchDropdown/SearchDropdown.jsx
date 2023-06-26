import styles from './SearchDropdown.module.css'
import { Link } from 'react-router-dom'
import { Spinner, ErrorMsg } from '../../components'

const SearchDropdown = ({ items, isLoading, isError, error }) => {
    return (
        <div className={styles.menuContainer}>
            {/* {isLoading ? (
                <Spinner />
            ) : isError ? (
                <ErrorMsg error={error.data} />
            ) : ( */}
                <div className={styles.mainWrapper}>
                    <div className={styles.itemsContainer}>
                        {items.map(({ id, mainImage, title, price }) => (
                            <Link
                                className={styles.itemContainer}
                                key={id}
                                to={`/product/${id}`}
                            >
                                <img
                                    className={styles.itemImage}
                                    src={mainImage}
                                    alt=""
                                />
                                <p className={styles.title}>{title}</p>
                                <span className={styles.price}>${price}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            {/* )} */}
        </div>
    )
}

export default SearchDropdown
