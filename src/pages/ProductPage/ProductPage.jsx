import styles from './ProductPage.module.css'

const ProductPage = () => {
    return (
        <main>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.imagesContainer}>
                            <div className={styles.mainImage}>
                                <img
                                    src="https://images-us.bookshop.org/ingram/9780525561460.jpg?height=500&v=v2-49de00722b6269295d067ebb8c12870b"
                                    alt=""
                                />
                            </div>
                            <div className={styles.images}>
                                <div className={styles.image}>
                                    <img
                                        src="https://images-us.bookshop.org/ingram/9780811228831.jpg?height=500&v=v2"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.image}>
                                    <img
                                        src="https://images-us.bookshop.org/ingram/9780374110031.jpg?height=500&v=v2"
                                        alt=""
                                    />
                                </div>
                                <div className={styles.image}>
                                    <img
                                        src="https://images-us.bookshop.org/ingram/9780385491037.jpg?height=500&v=v2-d93534dfebe18fa7a1757bad47ab0edb"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.productInfo}>
                            <h3 className={styles.productTitle}>
                                The Robber Bride
                            </h3>
                            <p className={styles.desc}>
                                Roz, Charis, and Tony--university classmates
                                decades ago--were reunited at Zenia's funeral
                                and have met monthly for lunch ever since,
                                obsessively retracing the destructive swath she
                                once cut through their lives. A brilliantly
                                inventive fabulist, Zenia had a talent for
                                exploiting her friends' weaknesses, wielding
                                intimacy as a weapon and cheating them of money,
                                time, sympathy, and men.
                            </p>
                            <div className={styles.tags}>
                                <div className={styles.tag}>Tag1</div>
                                <div className={styles.tag}>Tag2</div>
                                <div className={styles.tag}>Tag3</div>
                            </div>
                            <div className={styles.authors}>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        <img
                                            src="https://randomuser.me/api/portraits/women/9.jpg"
                                            alt="avatar"
                                        />
                                    </div>
                                    <span>J.K.Rowling</span>
                                </div>
                                <div className={styles.author}>
                                    <div className={styles.avatar}>
                                        <img
                                            src="https://randomuser.me/api/portraits/men/84.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <span>R.W.Tolkien</span>
                                </div>
                            </div>
                            <div className={styles.qtAndPrice}>
                                <div className={styles.qt}>
                                    <div>-</div>
                                    <span>1</span>
                                    <div>+</div>
                                </div>
                                <span>14.00 $</span>
                            </div>
                            <p className={styles.stock}>
                                In Stock<span>5</span>
                            </p>
                            <div className="btn">Add To Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductPage
