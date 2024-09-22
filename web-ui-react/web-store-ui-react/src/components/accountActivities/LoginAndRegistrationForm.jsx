import React, { useState } from "react";
import '../../css/login.css'
import { login, initialRegister } from "../../services/consumerservices/ConsumerFunctions";
import Swal from "sweetalert2";

function LoginAndRegistrationForm() {

    let user = {
        email : "",
        password : ""
    }

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [registerEmail, setRegisterEmail] = useState();
    const [registerPassword, setRegisterPassword] = useState();

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleRegisterEmail = (e) => setRegisterEmail(e.target.value)
    const handleRegisterPassword = (e) => setRegisterPassword(e.target.value)

    function switchForm(event) {
        const switchers = [...document.querySelectorAll('.switcher')]
        switchers.forEach(item => item.parentNode.classList.remove('is-active'))
        event.currentTarget.parentNode.classList.add('is-active')
    }

    function register(event) {
        event.preventDefault()
        if (registerEmail != null && registerPassword != null) {
            user.email = registerEmail
            user.password = registerPassword
            initialRegister(user)
                .then((res) => {
                    if (res.statusText === "Created") {
                        sessionStorage.setItem('user', JSON.stringify(res.data))
                        window.location.replace("/complete-registration")
                    }
                })
                .catch(function (error) {
                    if (error.response.status === 409) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Email already exist',
                            text: 'Please use a different email'
                        });
                    }else{
                        console.log(error)
                    }
                })
        }
    }

    async function loguser(event) {
        event.preventDefault()
        if (email != null && password != null) {
            user.email = email
            user.password = password
            login(user)
                .then((res) => {
                    if (res != null && res.data != null) {
                        sessionStorage.setItem('user', JSON.stringify(res.data))
                        Swal.fire({
                            icon: 'success',
                            title: 'Login successful!',
                            text: 'You have successfully logged in.'
                        }).then(function(){
                            //this will be changed to redirect url in future iterations
                            window.location.reload()
                        })
                        ;
                    }
                })
                .catch(function (error) {
                    if (error.response.status === 401) {
                        console.log(401 + " unauthorized")
                        Swal.fire({
                            icon: 'error',
                            title: 'Login failed!',
                            text: 'Email and password combination not found.'
                        });
                    }
                })
        }
    }

    return (
        <div>
            <section class="forms-section">
                <h1 class="section-title">LOGIN or SIGNUP</h1>
                <div class="forms">
                    <div class="form-wrapper is-active">
                        <button type="button" class="switcher switcher-login" onClick={switchForm}>
                            Login
                            <span class="underline"></span>
                        </button>
                        <form class="form form-login" onSubmit={loguser}>
                            <fieldset>
                                <legend>Please, enter your email and password for login.</legend>
                                <div class="input-block">
                                    <label for="login-email">E-mail</label>
                                    <input id="login-email" type="email" required onChange={handleEmailChange} />
                                </div>
                                <div class="input-block">
                                    <label for="login-password">Password</label>
                                    <input id="login-password" type="password" required onChange={handlePasswordChange} />
                                </div>
                            </fieldset>
                            <button type="submit" class="btn-login"> Login</button>
                        </form>
                    </div>
                    <div class="form-wrapper">
                        <button type="button" class="switcher switcher-signup " onClick={switchForm}>
                            Sign Up
                            <span class="underline"></span>
                        </button>
                        <form class="form form-signup" onSubmit={register}>
                            <fieldset>
                                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                                <div class="input-block">
                                    <label for="signup-email">E-mail</label>
                                    <input id="signup-email" type="email" required onChange={handleRegisterEmail} />
                                </div>
                                <div class="input-block">
                                    <label for="signup-password">Password</label>
                                    <input id="signup-password" type="password" minLength="8" required onChange={handleRegisterPassword} />
                                </div>
                            </fieldset>
                            <button type="submit" class="btn-signup">Continue</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoginAndRegistrationForm