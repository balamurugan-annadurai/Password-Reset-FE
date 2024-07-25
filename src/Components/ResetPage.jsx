import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'
import { toast, Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundPage from './NotFoundPage'
import SuccessMsg from './SuccessMsg'

const ResetPage = () => {
    const navigate = useNavigate();
    const { verificationString } = useParams();
    const [verified, setVerified] = useState(true);

    useEffect(() => {
        axios.post("/verifystring", { verificationString }).then(res => {
            if (res.data.message == "matched") {

            }
            else {
                setVerified(false);
                navigate("/404page");
            }
        })
    }, [verified])

    const handleSignUpClick = () => {
        navigate("/")
    }

    const handleForgotPasswordClick = () => {
        navigate("/resetpassword")
    }

    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmPassword: ''
        },
        validationSchema: yup.object({
            newPassword: yup.string()
                .required('Required')
                .min(8, "Password should be min 8 characters"),
            confirmPassword: yup.string().required("Required")
        }),
        onSubmit: async (values) => {
            const { newPassword, confirmPassword } = values;
            if (newPassword != confirmPassword) {

                toast.error("Password not matching")
            }
            else {
                try {
                    const response = await axios.post("/changepassword", { verificationString, newPassword })
                    if (response.data.message == "Password changed") {
                        toast.success("Password reset successfully", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            transition: Slide // Use Slide for right-side animation
                        });
                        formik.resetForm();
                        setTimeout(() => {
                            navigate("/login");
                        }, 5000)
                    }

                } catch (error) {
                    toast.error("Failed to reset password");
                }
            }
        }
    })
    return (

        
             verified &&
            <div className='vh-100 d-flex justify-content-center align-items-center bg-color'>
                <div className="outer-container">
                    <p className='title'>Reset Password</p>
                    <p className='text1'>Enter your New password</p>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="input-container">
                            {
                                formik.touched.newPassword && formik.errors.newPassword ?
                                    <div className='erro-msg'>{formik.errors.newPassword}</div> : null
                            }
                            <i className='bx bx-lock-open-alt'></i>
                            <input
                                type="password"
                                placeholder='New Password'
                                {...formik.getFieldProps("newPassword")}
                            ></input>
                        </div>
                        <div className="input-container">
                            {
                                formik.touched.confirmPassword && formik.errors.confirmPassword ?
                                    <div className='erro-msg'>{formik.errors.confirmPassword}</div> : null
                            }
                            <i className='bx bx-lock-alt'></i>
                            <input
                                type="password"
                                placeholder='Confirm Password'
                                {...formik.getFieldProps("confirmPassword")}
                            />
                        </div>
                        <button className='custom-btn' type="submit">Reset Password</button>
                    </form>
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

export default ResetPage