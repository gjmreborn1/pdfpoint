import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";

const USER_CREDENTIALS = {
    lawyer: {
        login: "lawyer",
        password: "123456"
    },
    participant: {
        login: "participant",
        password: "xyzabc"
    }
};

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [redirectUrl, setRedirectUrl] = useState("/");
    const [formError, setFormError] = useState(false);

    const correctForm = () => {
        return login.length > 0 && password.length > 0;
    };

    const handleSubmit = e => {
        e.preventDefault();

        if(login === USER_CREDENTIALS.lawyer.login &&
                    password === USER_CREDENTIALS.lawyer.password) {
            setRedirectUrl("/lawyer");
        } else if(login === USER_CREDENTIALS.participant.login &&
                    password === USER_CREDENTIALS.participant.password) {
            setRedirectUrl("/participant");
        } else {
            setLogin("");
            setPassword("");
            setFormError(true);
        }
    };

    if(redirectUrl !== "/") {
        return <Redirect to={`${redirectUrl}`} push />;
    }

    if(formError) {
        alert("Bad login credentials.");
        setFormError(false);
    }

    return (
        <div className="LoginForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="login">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        placeholder="Login..."
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!correctForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default LoginForm;
