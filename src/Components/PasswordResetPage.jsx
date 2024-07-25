import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessMsg from './SuccessMsg'

const PasswordResetPage = () => {
    const navigate = useNavigate();
    const [resetPasswordStatus, setResetPasswordStatus] = useState(false);
    const handleLoginClick = () => {
        navigate("/login")
    }
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: yup.object({
            email: yup.string()
                .email('Invalid email')
                .required('Email is required'),
        }),
        onSubmit: (values) => {
                axios.post("/forgotpassword", values).then(res => {
                    if (res.data.message == "User not found") {
                        toast.error("User not registered");
                    }
                    else if (res.data.message == "User found") {
                        toast.success("Verification email sent", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            transition: Slide // Use Slide for right-side animation
                        });
                        setTimeout(() => {
                            setResetPasswordStatus(true);
                        }, 6000);
                    }
                }).catch(err => {
                    toast.error("Please try again later");
                } )
        }
    })
    return (
        resetPasswordStatus ? <SuccessMsg /> :
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
                    <button className='custom-btn' type="submit" >Forgot Password</button>
                </form>
                <hr className='line' />
                <p className='d-flex justify-content-center mt-0 p-0 text2 login'><span onClick={handleLoginClick}>Log In</span></p>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default PasswordResetPage