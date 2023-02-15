import React from 'react'
import { useState } from 'react'
import Axios from 'axios'

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitSignUp = () => {
        Axios.post('http://localhost:3001/api/insert', {
            email: email,
            password: password,
        }).then(() => {
            alert("success!");
        })
    }
    return (
        <div className='container'>
            <h3 className='fw-bold mt-4 pt-5 my-5'>Sign Up Page</h3>
            <div className="mb-4 text-start form-floating">
                <input type="email" className="form-control" id="email" placeholder='email' onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <label >Email Address</label>
            </div>
            <div className="mb-4 text-start form-floating">
                <input type="password" className="form-control" id="password" placeholder='password' onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <label>Password</label>
                {/* <span className="input-group-text"><a href=''><EyeSlashFill id="togglePassword" /></a></span> */}
            </div>
            <div className='d-grid'>
                <button type="button" className="btn btn-primary " onClick={submitSignUp}>Register</button>
            </div>
            <p className='pt-5'><a href='#test'>Already have an account? Sign in!</a></p>
        </div>
    )
}

export default SignInPage