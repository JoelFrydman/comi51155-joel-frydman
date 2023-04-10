import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form-control my-2"
                        placeholder='Tu email'
                    />

                    <input 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form-control my-2"
                        placeholder='Contraseña'
                    />
                   <div className='button-div'>
                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                    <Link to={"/register"}>Registrarme</Link>
                    
                    </div>
                </form>
                <div className='button-google'>
                <button className='btn btn-outline-primary' onClick={googleLogin}>Ingresar con Google - <FcGoogle/></button>
                
                </div>
            </div>
        </div>
    )
}

export default LoginScreen