


import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom';

const LoginPage = () => {

    let { loginUser } = useContext(AuthContext)
    return (
        <div className='container-fluid' style={{ backgroundColor: " #F0EEE6", minHeight: "100vh" }}>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 my-3 d-flex justify-content-center' style={{ position: "relative", top: '40px', maxHeight: "650px" }}>
                    <div className='card border-0 shadow-lg rounded-lg d-flex justify-content-center w-75 ' style={{ backgroundColor: "white" }}>
                        <div className='card-body  mx-5'>
                            <form onSubmit={loginUser} className='d-flex flex-column align-items-center'>
                                <div className='text-center mb-4'>
                                    <h3>Welcome back!!</h3>
                                    <p className='text-secondary'>Enter your name to proceed.</p>
                                </div>
                                <div className='form-group mb-4 w-75'>
                                    <label htmlFor="username">Name</label>
                                    <input type="text" name="username" id="username" placeholder="Enter Username" className='form-control' />
                                </div>
                                <div className='form-group mb-4 w-75'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter Password" className='form-control' />
                                </div>
                                <div className='form-group w-75'>
                                    <input type="submit" className='btn w-100' value='Login' style={{ backgroundColor: "#9493BF" }} />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='text-secondary'>Don't have an account? <Link to="/register">Sign up</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 my-3 d-none d-md-block'>
                    <img src="https://images.pexels.com/photos/587958/pexels-photo-587958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='login' className='img-fluid rounded' style={{ width: "570px", height: "600px", left: "30px", top: "40px", position: "relative", borderRadius: "10px" }} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
