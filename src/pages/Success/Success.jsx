import { useLocation } from 'react-router-dom'
import styles from './Success.module.css'

const Success = () => {
    const location = useLocation()

    return (
        <main>
            <div className="container">
                <div className={styles.wrapper}>
                    {!location.state.isSuccess ? (
                        <div className={styles.succesContainer}>
                            <div className={styles.content}>
                                <div className={styles.iconContainer}>
                                    <svg
                                        version="1.1"
                                        id="Capa_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                    >
                                        <circle
                                            style={{ fill: '#339533' }}
                                            cx="25"
                                            cy="25"
                                            r="25"
                                        />
                                        <polyline
                                            style={{
                                                fill: 'none',
                                                stroke: '#FFFFFF',
                                                strokeWidth: 2,
                                                strokeLinecap: 'round',
                                                strokeLinejoin: 'round',
                                                strokeMiterlimit: 10,
                                            }}
                                            points="38,15 22,33 12,25 "
                                        />
                                    </svg>
                                </div>
                                <h1 className={styles.title}>Success!</h1>
                                <p className={styles.message}>
                                    Order was placed successfully and will be
                                    delivered in 3-5 business days
                                </p>
                            </div>
                            <div className="btn">Dismiss</div>
                        </div>
                    ) : (
                        <div className={styles.errorContainer}>
                            <div className={styles.content}>
                                <div className={styles.iconContainer}>
                                    <svg
                                        fill="#000000"
                                        viewBox="0 0 24 24"
                                        id="warning-alt-2"
                                        dataName="Flat Color"
                                    >
                                        <path
                                            id="primary"
                                            d="M23,11,18.35,3a2,2,0,0,0-1.73-1H7.38A2,2,0,0,0,5.65,3L1,11a2,2,0,0,0,0,2l4.62,8a2,2,0,0,0,1.73,1h9.24a2,2,0,0,0,1.73-1L23,13A2,2,0,0,0,23,11Z"
                                            style={{ fill: '#9C1919' }}
                                        ></path>
                                        <path
                                            id="secondary"
                                            d="M11,13V7a1,1,0,0,1,2,0v6a1,1,0,0,1-2,0Zm1,2.5A1.5,1.5,0,1,0,13.5,17,1.5,1.5,0,0,0,12,15.5Z"
                                            style={{ fill: '#fff' }}
                                        ></path>
                                    </svg>
                                </div>
                                <h1 className={styles.title}>Error!</h1>
                                <p className={styles.message}>
                                    Opps..Error occured. Please try again later.
                                </p>
                            </div>
                            <div className="btn">Dismiss</div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Success
