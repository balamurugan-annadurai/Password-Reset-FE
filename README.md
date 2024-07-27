# User Management Web Application

## 🌟 Overview

Welcome to the User Management Web Application! This application is designed to handle user registration, login, password reset, and password management. It includes the following features:

- **Sign Up**: Register a new user with email and password.
- **Log In**: Authenticate users with their credentials.
- **Forgot Password**: Allow users to request a password reset.
- **Reset Password**: Let users reset their password using a verification link.

The application uses the MERN stack (MongoDB, Express.js, React.js, Node.js) for full-stack development.

## 🛠 Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: bcryptjs for password hashing
- **Email Service**: nodemailer for sending verification and reset emails
- **Form Validation**: Formik and Yup
- **Notifications**: react-toastify

## 🚀 Features

### 1. **Sign Up Page**
- Allows users to create a new account.
- Notifies users if they are already registered or if there are other issues during registration.

### 2. **Log In Page**
- Users can log in with their credentials.
- Provides feedback if the user is not registered or if the login fails.

### 3. **Forgot Password Page**
- Users can request a password reset by entering their registered email.
- Sends a verification email with a password reset link.
- The link is valid for 10 minutes.

### 4. **Reset Password Page**
- Users can reset their password using the link sent to their email.
- Provides feedback if the link is expired or invalid.
- Allows users to set a new password.

## 🔧 Usage

- **Sign Up**: Navigate to the sign-up page, enter your email and password, and click "Sign Up".
- **Log In**: Navigate to the login page, enter your credentials, and click "Log In".
- **Forgot Password**: Navigate to the forgot password page, enter your registered email, and click "Forgot Password". Check your email for the reset link.
- **Reset Password**: Click the reset link in your email, enter and confirm your new password, and submit.

## 📝 Notes

- The password reset link expires after 10 minutes for security reasons.
- Make sure to use a valid email account for sending and receiving verification emails.
- Update environment variables with your own email credentials and MongoDB connection string.

## 🤝 Connect with Me

💼 **LinkedIn:** [Balamurugan A](https://www.linkedin.com/in/balamurugan-a/)<br>

