import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Signup } from './pages/Signup';
import { UserInfoPage } from './pages/UserInfoPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </Router>
    );
}