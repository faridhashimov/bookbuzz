import {
    decreaseQt,
    deleteFromCart,
    increaseQt,
    resetCart,
} from '../../redux/cartSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Cart.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCheckoutMutation } from '../../redux/bookbuzzApi/bookbuzzApi.js'

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate()

    const [checkout, { isError, isLoading, isSuccess }] = useCheckoutMutation()

    const handleDelete = (id) => {
        try {
            dispatch(deleteFromCart(id))
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = (exp, product) => {
        try {
            if (exp === 'dec') {
                dispatch(decreaseQt(product))
            } else {
                dispatch(increaseQt(product))
            }
        } catch (error) {
            console.log(error)
        }
    }

    let subtotal = cart.reduce(
        (acc, prev) => acc + prev.quantity * prev.price,
        0
    )
    let total = subtotal + 3.26

    const onCheckout = async () => {
        try {
            await checkout({
                products: cart,
            }).unwrap()
            dispatch(resetCart())
            navigate('/succes', { state: isSuccess, replace: true })
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <main>
            <div className="container">
                <div className={styles.wrapper}>
                    {cart.length === 0 ? (
                        <EmptyCart />
                    ) : (
                        <>
                            <div className={styles.itemsContainer}>
                                {cart.map((item) => (
                                    <div key={item.id} className={styles.item}>
                                        <div className={styles.itemInfo}>
                                            <div className={styles.top}>
                                                <div className={styles.summary}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.subtitleShort}</p>
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                    className={
                                                        styles.removeItem
                                                    }
                                                >
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
                                                </button>
                                            </div>
                                            <div className={styles.bottom}>
                                                <span
                                                    className={styles.itemPrice}
                                                >
                                                    ${item.price.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className={styles.itemImage}>
                                            <img
                                                src={item.mainImage}
                                                alt={item.title}
                                            />
                                            <div className={styles.changeQt}>
                                                <button
                                                    onClick={() =>
                                                        handleClick('dec', item)
                                                    }
                                                    disabled={
                                                        item.quantity < 2
                                                            ? true
                                                            : false
                                                    }
                                                >
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
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() =>
                                                        handleClick('inc', item)
                                                    }
                                                >
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
                                                            d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                                                            fill="#fff"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.checkoutContainer}>
                                <div className={styles.checkout}>
                                    <h3>Shopping Cart</h3>
                                    <div className={styles.checkoutItems}>
                                        {cart.map((item) => (
                                            <div
                                                key={item.id}
                                                className={styles.checkoutItem}
                                            >
                                                <div
                                                    className={
                                                        styles.ckecoutItemInfo
                                                    }
                                                >
                                                    <h4>{item.title}</h4>
                                                    <span>
                                                        Quantity:{' '}
                                                        {item.quantity}
                                                    </span>
                                                </div>
                                                <div
                                                    className={
                                                        styles.chekcoutItemPrice
                                                    }
                                                >
                                                    <span>
                                                        $
                                                        {item.quantity *
                                                            item.price}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={styles.totalContainer}>
                                        <div className={styles.subtotal}>
                                            <div>
                                                <span>Subtotal</span>
                                                <span>${subtotal}</span>
                                            </div>
                                            <div>
                                                <span>Shipping</span>
                                                <span>$3.26</span>
                                            </div>
                                        </div>
                                        <div className={styles.total}>
                                            <h4>Total</h4>
                                            <span>${total}</span>
                                        </div>
                                    </div>
                                    <div className="btn" onClick={onCheckout}>
                                        Checkout
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}

const EmptyCart = () => {
    return (
        <div className={styles.noProductContainer}>
            <div className={styles.cartImageContainer}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                    alt=""
                />
            </div>

            <span>No products added to cart</span>
            <Link className={styles.goShopBtn} to={'/'}>
                Return to Shop
            </Link>
        </div>
    )
}

export default Cart
