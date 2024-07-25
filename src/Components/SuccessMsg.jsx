import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SuccessMsg = () => {
    const navigate = useNavigate();

    const handleReturnClick = () => {
        navigate("/login")
    }
    
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center bg-color'>
            <div className="outer-container">
                <p className='title'>Verify your email</p>
                <p className='forgot-password-text'>We have send a verification link to your email kindly verify to reset your password</p>
                
                <hr className='line' />
                <p className='d-flex justify-content-center mt-0 p-0 text2 login'><span onClick={handleReturnClick}>Return to Login page</span></p>
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

export default SuccessMsg