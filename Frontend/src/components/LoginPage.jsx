import React from "react";
import styles from './LoginPage.css';

function LoginPage() {
  return (
    <main className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageColumn}>
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbc41e521e05db390f0d6a624fb6c05d9aa1760ca44ba214a343a69b08d87f41?placeholderIfAbsent=true&apiKey=8895f3af32cf48359ab26cfc5c967498" 
              className={styles.loginImage} 
              alt="Login page illustration"
            />
          </div>
          <div className={styles.formColumn}>
            <form className={styles.formContainer}>
              <h1 className={styles.loginTitle}>Log In</h1>
              <label htmlFor="emailInput" className={styles['visually-hidden']}>Email Address</label>
              <input 
                type="email" 
                id="emailInput" 
                className={styles.inputField} 
                placeholder="Email Address" 
                aria-label="Email Address"
              />
              <label htmlFor="passwordInput" className={styles['visually-hidden']}>Password</label>
              <input 
                type="password" 
                id="passwordInput" 
                className={styles.inputField} 
                placeholder="Password" 
                aria-label="Password"
              />
              <button type="submit" className={styles.loginButton}>Log in</button>
              <a href="#" className={styles.resetPassword}>
                Forgotten Your Password? Reset Password
              </a>
              <a href="#" className={styles.signUp}>New User? Sign up</a>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;