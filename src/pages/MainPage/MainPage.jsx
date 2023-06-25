import { books } from '../../books'
import { useGetAllProductsQuery } from '../../redux/bookbuzzApi';

import styles from './MainPage.module.css'

const MainPage = () => {
    // const { data: books, isLoading, isError } = useGetAllProductsQuery()
    console.log(books);


    return (
        <main>
            <div className="container">
                <div className={styles.contentWrapper}>
                    <h1 className={styles.mainTitle}>Browse All Books</h1>
                    <div className={styles.gridWrapper}>
                        <div className={styles.contentGrid}>
                            {books.map((item) => (
                                <div key={item.id} className={styles.content}>
                                    <div className={styles.actionIcon}>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className={styles.likeIcon}>
                                        <svg
                                            version="1.1"
                                            id="heart-15"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="15px"
                                            height="15px"
                                            viewBox="0 0 15 15"
                                        >
                                            <path
                                                d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
                                            />
                                        </svg>
                                        <span>{item.numOfLikes}</span>
                                    </div>
                                    <div className={styles.like}></div>
                                    <div className={styles.imageContainer}>
                                        <img src={item.mainImage} alt={item.title} />
                                    </div>
                                    <h3 className={styles.title}>
                                        {item.title}
                                    </h3>
                                    <p className={styles.desc}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <button className={styles.loadBtn}>Load more</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainPage
