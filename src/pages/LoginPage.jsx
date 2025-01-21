import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../slices/authSlice';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('https://vistora-backend-auth.onrender.com/auth/login', { email, password })
            .then(response => {
                const { token, refresh_token } = response?.data;
                dispatch(setCurrentUser({ email }));
                localStorage.setItem('token', token);
                localStorage.setItem('refresh_token', refresh_token);
                navigate('/profile');
                console.log(response);
            }).catch(err => {
                setError(err.response.data.message);
            });
    }

    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className='border-b-2 border-gray-200 pb-3'>
                <div className='flex justify-center'>
                    <h1>Vistora.in</h1>
                </div>
                <div>
                    <div className='border-1 border-gray-200 rounded-md w-[24%] mx-auto p-4'>
                        <div>
                            <div>
                                <h5>Sign in or create account</h5>
                            </div>
                            <form
                                onSubmit={(e) => handleLogin(e)}
                                className='flex flex-col gap-3'>
                                <div>
                                    <span>Enter email</span>
                                    <input
                                        type='text'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Email'
                                        className='w-full p-2 border-2 border-gray-800 rounded-md'
                                    />
                                </div>
                                <div>
                                    <span>Enter password</span>
                                    <input
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Password'
                                        className='w-full p-2 border-2 border-gray-800 rounded-md'
                                    />
                                </div>
                                <div>
                                    <button className='bg-yellow-400 w-full p-2 rounded-2xl' >Continue</button>
                                </div>
                            </form>
                            <div>
                                <span>Create account</span>
                                <Link to="/register">Click</Link>
                            </div>
                            <div className='border-b-2 border-gray-200 pb-3 my-3'>
                                <span>By continuing, you agree to Vistora's Conditions of Use and Privacy Notice.</span>
                            </div>
                            <div className='flex flex-col'>
                                <span>Buying for work?</span>
                                <span>Shop on Vistora Business</span>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            {error && <div>{error}</div>}
            <div>
                <div className='flex justify-center gap-8'>
                    <p>Condition of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>
                </div>
                <div className='flex justify-center'>
                    <p>© 2025, Vistora.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div >
    )
}

export default LoginPage