import React, { useEffect, useState } from 'react'

const LoginPage = () => {
    const initalvlaues = { username: '', email: '', password: '' }
    const [formvalue, setFormvalue] = useState(initalvlaues)
    const [formErrors, setFormErrors] = useState({})
    const [issubmit, setIssubmit] = useState(false)
    const handlechange = (e) => {
        const { name, value } = e.target
        setFormvalue({ ...formvalue, [name]: value })
        console.log(formvalue)
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formvalue));
        setIssubmit(true);

    }
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && issubmit)
            console.log(formvalue)
    }, [formErrors])
    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^s@]{2,}$/i;
        if (!values.username) {
            errors.username = 'username is required'
        }
        if (!values.email) {
            errors.email = 'email is required'
        } else if (!regex.test(values.email)) {
            errors.email = 'this is not valid email format'
        }
        if (!values.password) {
            errors.password = 'password is required'
        } else if (values.password.length < 4) {
            errors.password = 'password is must be more than 4 character'
        } else if (values.password.length > 10) {
            errors.password = 'password is cannot is exceed more than 10 character'
        }
        return errors;
    }
    return (
        <>
            <div className='container'>
                {Object.keys(formErrors).length === 0 && issubmit ? (<div className='ui messages success'>signed in succesfully</div>) : <pre>{JSON.stringify(formvalue, undefined, 2)}</pre>}
                <form onSubmit={handlesubmit}>
                    <h1> Login Form</h1>
                    <div className='ui divider'>
                        <div className='ui form'>
                            <div className='field'>
                                <label>Username </label>
                                <input type="text" name='username' placeholder='username' value={formvalue.username} onChange={handlechange} />
                            </div>
                            <p>{formErrors.username}</p>
                            <div className='field'>
                                <label>Email</label>
                                <input type="email" name='email' placeholder='Email' value={formvalue.email} onChange={handlechange} />
                            </div>
                            <p>{formErrors.email}</p>
                            <div className='field'>
                                <label>Password</label>
                                <input type="password" name='password' placeholder='password' value={formvalue.password} onChange={handlechange} />
                            </div>
                            <p>{formErrors.password}</p>
                            <button className='fluid ui button blue'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage
