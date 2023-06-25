import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.footerBody}>
                <div className={styles.leftBar}>
                    <h1>BookBuzz</h1>
                </div>
                <div className={styles.rightBar}>
                    <ul className={styles.socials}>
                        <li style={{fontWeight: 700}}>Social</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Linkedin</li>
                    </ul>
                    <ul className={styles.socials}>
                        <li>Get help</li>
                        <li>Partner with us</li>
                        <li>Add your bookshop</li>
                        <li>Sign up to sell books</li>
                    </ul>
                    <ul className={styles.socials}>
                        <li>Reed our blog</li>
                        <li>Buy gift card</li>
                        <li>Bookshops nearby</li>
                        <li>Save on first order</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer