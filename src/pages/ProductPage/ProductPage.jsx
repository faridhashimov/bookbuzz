import { useNavigate, useParams } from 'react-router-dom'
import styles from './ProductPage.module.css'
import { useGetProductQuery } from '../../redux/bookbuzzApi'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { data: book, isLoading, isError } = useGetProductQuery(id)

    const onSetQuantity = (exp) => {
        if (exp === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    }

    const onAddToCart = () => {
        let data = {
            id: book.id,
            title: book.title,
            subtitleShort: book.subtitleShort,
            mainImage: book.mainImage,
            price: book.price,
            quantity,
        }

        try {
            if (!user) {
                navigate('/login', { replace: true })
            } else {
                dispatch(addToCart({ ...data }))
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <main>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.imagesContainer}>
                            <div className={styles.mainImage}>
                                <img
                                    src={book.mainImage}
                                    alt="produc_main_img"
                                />
                            </div>
                            <div className={styles.images}>
                                {book.images.map((item) => (
                                    <div key={item} className={styles.image}>
                                        <img src={item} alt="product_img_1" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productTitle}>
                                {book.title}
                            </h3>
                            <p className={styles.desc}>{book.subtitleShort}</p>
                            <div className={styles.tags}>
                                {book.tags.map((tag) => (
                                    <div key={tag} className={styles.tag}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.authors}>
                                {book.authors.map((author) => (
                                    <div key={author} className={styles.author}>
                                        <div className={styles.avatar}>
                                            <img
                                                src="https://randomuser.me/api/portraits/women/9.jpg"
                                                alt="avatar"
                                            />
                                        </div>
                                        <span>{author}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.qtAndPrice}>
                                <div className={styles.qt}>
                                    <div onClick={() => onSetQuantity('dec')}>
                                        -
                                    </div>
                                    <span>{quantity}</span>
                                    <div onClick={() => onSetQuantity('inc')}>
                                        +
                                    </div>
                                </div>
                                <span>{book.price} $</span>
                            </div>
                            <p className={styles.stock}>
                                In Stock: <span>5</span>
                            </p>
                            <div className="btn" onClick={onAddToCart}>
                                Add To Cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage
