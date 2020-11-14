import React from "react";
import LoginForm from "./components/auth/LoginForm";
import PageNotFound from "./pages/PageNotFound";
import LawyerDashboard from "./pages/LawyerDashboard";
import ParticipantDashboard from "./pages/ParticipantDashboard";
import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Route path="/" component={LoginForm} exact />
            <Route path="/lawyer" component={LawyerDashboard} exact />
            <Route path="/participant" component={ParticipantDashboard} exact />
            <Route component={PageNotFound} />
        </Switch>
    );
};

export default App;
