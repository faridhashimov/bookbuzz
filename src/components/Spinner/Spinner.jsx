import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <svg className={styles.styledSpinner} viewBox="0 0 50 50">
                <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="2"
                />
            </svg>
        </div>
    )
}

export default Spinner
