import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Redirect from "react-router-dom";

const LogoutButton = () => {
    const [doRedirect, setDoRedirect] = useState(false);

    if(doRedirect) {
        return (
            <Redirect to="/" push />
        )
    } else {
        return (
            <Button block size="lg" type="button" onClick={() => setDoRedirect(true)}>
                Logout
            </Button>
        );
    }
};

export default LogoutButton;
