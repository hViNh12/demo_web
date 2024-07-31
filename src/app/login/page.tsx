import React from 'react';
import Link from 'next/link';
import '@/CSS_Login/app.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-icon">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qW-NrJjA4QCBaOsuNPfNQqT1ikDg0UO463vLOwHY1Du9kRqJq7g1S4obhzKaPD_jMzI&usqp=CAU"
          alt="Lock Icon"
        />
      </div>
      <h2>Sign in</h2>
      <form action="/login" method="post">
        <label htmlFor="email">Email Address </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          defaultValue="admin@gmail.com"
        />

        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          defaultValue="******"
        />

        <button type="submit">SIGN IN</button>
      </form>
      <div className="login-footer">
        <Link href="/forgot-password" className="login-footer-link">Forgot password?</Link>
        <Link href="/sign-up" className="login-footer-link">Don't have an account? Sign Up</Link>
      </div>
      <Link href="/" className="back-home-button">Back to Home</Link> {/* Nút quay lại trang chủ */}
    </div>
  );
};

export default Login;
