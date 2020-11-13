import React from "react";
import LoginForm from "./components/LoginForm";
import PageNotFound from "./components/PageNotFound";
import LawyerDashboard from "./components/LawyerDashboard";
import ParticipantDashboard from "./components/ParticipantDashboard";
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
