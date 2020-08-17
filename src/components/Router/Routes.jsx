import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Profile from '../Profile/Profile';
import MakeQuiz from '../Quiz/CreateQuiz/MakeQuiz';
import AdminPanel from '../AdminPanel/AdminPanel';
import HomePage from '../HomePage/HomePage';
import Error404 from '../utils/404/Error404';
import Register from '../Register/Register';
import MyQuiz from '../MyQuiz/MyQuiz';
import TakeQuiz from '../Quiz/TakeQuiz/TakeQuiz';
import QuizSubmissions from '../QuizSubmissions/QuizSubmissions';
import GetMyToken from '../GetMyToken/GetMyToken';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/getmytoken' component={GetMyToken} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/quizzes/:quizId' component={TakeQuiz} />
            <PrivateRoute
                exact
                path='/quizzes/:quizId/submissions/:submissionId'
                component={QuizSubmissions}
            />
            <PrivateRoute exact path='/make-quiz' component={MakeQuiz} />
            <PrivateRoute exact path='/my-quiz' component={MyQuiz} />
            <PrivateRoute exact path='/profile' component={Profile} />
            <AdminRoute exact path='/admin' component={AdminPanel} />
            <Route component={Error404} />
        </Switch>
    );
};

export default Routes;
