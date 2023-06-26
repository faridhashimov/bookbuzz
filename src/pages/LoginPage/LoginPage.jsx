import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../redux/bookbuzzApi'
import { userLogin } from '../../redux/userSlice'
import bookReader from '../../assets/book_reader.jpg'

import styles from './LoginPage.module.css'

const LoginPage = () => {
    const [showPwd, setShowPwd] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginUser, { isError, isLoading, error }] = useLoginUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const user = await loginUser({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }).unwrap()
            dispatch(userLogin(user))
            navigate('/cart', { replace: true })
        } catch (err) {
            setErrorMsg(err.data.errorMessage)
            // setFocus(false)
            // setErrMsg(err.data)
        }
    }

    return (
        <main>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.infoContainer}>
                        <h1>BookBuzz</h1>
                        <div className={styles.imageContainer}>
                            <img src={bookReader} alt="login" />
                        </div>
                    </div>
                    <div className={styles.formContainer}>
                        <h1 className={styles.loginTitle}>Log In</h1>
                        <form
                            className={styles.loginForm}
                            onSubmit={handleSubmit}
                        >
                            <label htmlFor="email">Email</label>
                            <div className={styles.inputContainer}>
                                <input
                                    className={styles.loginInput}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email..."
                                    ref={emailRef}
                                />
                                <div className={styles.iconContainer}>
                                    <svg
                                        fill="#000000"
                                        viewBox="0 0 330.001 330.001"
                                    >
                                        <g id="XMLID_348_">
                                            <path
                                                id="XMLID_350_"
                                                d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
                                            />
                                            <polygon
                                                id="XMLID_351_"
                                                points="165.001,146.4 310.087,40.001 19.911,40 	"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <label htmlFor="password">Password</label>
                            <div className={styles.inputContainer}>
                                <input
                                    className={styles.loginInput}
                                    placeholder="Enter your password..."
                                    ref={passwordRef}
                                    name="password"
                                    id="passwors"
                                    type={showPwd ? 'text' : 'password'}
                                />
                                <div
                                    className={styles.iconContainer}
                                    onClick={() => setShowPwd(!showPwd)}
                                >
                                    {showPwd ? (
                                        <svg fill="#000000" viewBox="0 0 24 24">
                                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                        </svg>
                                    ) : (
                                        <svg fill="#000000" viewBox="0 0 24 24">
                                            <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            {errorMsg.length > 0 ? (
                                <div className={styles.errorMsg}>
                                    <p>{errorMsg}</p>
                                </div>
                            ) : null}
                            <button
                                className="btn"
                                // disabled={
                                //     !emailRef.current ||
                                //     !passwordRef.current
                                // }
                                // type="submit"
                                // disabled={isFetching}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage
