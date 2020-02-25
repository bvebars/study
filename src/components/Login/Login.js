import React from 'react'
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form action="">
            <div>
                <Field placeholder={"Login"} name={"login"}  component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"checkbox"} name={"rememberMe"} component={"input"} type="checkbox"/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm);


const Login = () => {
    return (

        <div>
            <h1>lOGIN</h1>
            <ReduxLoginForm/>
        </div>
    )
};

export default Login