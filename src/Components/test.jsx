import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PasswordResetPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login")
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: yup.string()
                .required("Password is required")
                .min(8, "Password should be min 8 characters")
        }),
        onSubmit: (values) => {
            console.log(values)
            alert()
            
        }
    })
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center bg-color'>
            <div className="outer-container">
                <p className='title'>Forgot Password</p>
                <p className='forgot-password-text'>We’ll email you a link so you can reset your password</p>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="input-container">
                        {
                            formik.touched.email && formik.errors.email ?
                                <div className='erro-msg'>{formik.errors.email}</div> : null
                        }
                        <i className='bx bx-envelope'></i>
                        <input
                            type="email"
                            placeholder='Email'
                            {...formik.getFieldProps("email")}
                        ></input>
                    </div>
                    <button className='custom-btn' type="submit" >Reset Password</button>
                </form>
                <hr className='line' />
                <p className='d-flex justify-content-center mt-0 p-0 text2 login'><span onClick={handleLoginClick}>Log In</span></p>
            </div>
        </div>
    )
}

export default PasswordResetPage