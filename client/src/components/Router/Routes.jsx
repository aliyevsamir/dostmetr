import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Profile from '../Profile/Profile';
import MakeQuiz from '../Quiz/CreateQuiz/MakeQuiz';
import AdminPanel from '../AdminPanel/AdminPanel';

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact path='/make-quiz' component={MakeQuiz} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <AdminRoute exact path='/admin' component={AdminPanel} />
        </Switch>
    );
};

export default Routes;

// {
//     path: '/profile',
//     component: Profile,
//     exact: true,
//     redirectRoute: '/'
// },
// {
//     path: '/make-quiz',
//     component: MakeQuiz,
//     exact: true,
//     redirectRoute: '/'
// }
