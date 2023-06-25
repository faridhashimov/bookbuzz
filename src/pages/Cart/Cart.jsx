import { books } from '../../books.js'
import styles from './Cart.module.css'

const Cart = () => {
    return (
        <main>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.itemsContainer}>
                        {books.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <div className={styles.itemInfo}>
                                    <div className={styles.top}>
                                        <div className={styles.summary}>
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitleShort}</p>
                                        </div>
                                        <div className={styles.removeItem}>
                                            <svg
                                                height={10}
                                                width={10}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className={styles.bottom}>
                                        <span className={styles.itemPrice}>
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.itemImage}>
                                    <img src={item.mainImage} alt={item.title} />
                                    <div className={styles.changeQt}>
                                        <div>
                                            <svg
                                                height={10}
                                                width={10}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </div>
                                        <span>1</span>
                                        <div>
                                            <svg
                                                height={10}
                                                width={10}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.checkoutContainer}>
                        <div className={styles.checkout}>
                            <h3>Shopping Cart</h3>
                            <div className={styles.checkoutItems}>
                                <div className={styles.checkoutItem}>
                                    <div className={styles.ckecoutItemInfo}>
                                        <h4>Book Title</h4>
                                        <span>Quantity:1</span>
                                    </div>
                                    <div className={styles.chekcoutItemPrice}>
                                        <span>$10.00</span>
                                    </div>
                                </div>
                                <div className={styles.checkoutItem}>
                                    <div className={styles.ckecoutItemInfo}>
                                        <h4>Book Title</h4>
                                        <span>Quantity:1</span>
                                    </div>
                                    <div className={styles.chekcoutItemPrice}>
                                        <span>$10.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.totalContainer}>
                                <div className={styles.subtotal}>
                                    <div>
                                        <span>Subtotal</span>
                                        <span>$22.00</span>
                                    </div>
                                    <div>
                                        <span>Subtotal</span>
                                        <span>$3.26</span>
                                    </div>
                                </div>
                                <div className={styles.total}>
                                    <h4>Total</h4>
                                    <span>$25.26</span>
                                </div>
                            </div>
                            <div className="btn">Checkout</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart
