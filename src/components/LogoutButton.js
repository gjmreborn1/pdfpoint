import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";

const LogoutButton = ({className}) => {
    const [doRedirect, setDoRedirect] = useState(false);

    if(doRedirect) {
        return (
            <Redirect to="/" push />
        )
    } else {
        return (
            <Button className={className} block size="lg" type="button" onClick={() => setDoRedirect(true)}>
                Logout
            </Button>
        );
    }
};

export default LogoutButton;
