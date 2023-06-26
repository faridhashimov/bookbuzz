import styles from './ErrorMsg.module.css'

const ErrorMsg = ({ error, width }) => {
    return (
        <div
            className={styles.errorContainer}
            style={{ width: width ? `${width}%` : '100%' }}
            width={width}
        >
            Something went wrong: {error}...
        </div>
    )
}

export default ErrorMsg
