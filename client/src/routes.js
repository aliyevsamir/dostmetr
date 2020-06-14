import HomePage from './components/HomePage/HomePage';
import MakeQuiz from './components/Quiz/CreateQuiz/MakeQuiz';
import Profile from './components/Profile/Profile';
import AdminPanel from './components/AdminPanel/AdminPanel';

export const publicRoutes = [
    {
        path: '/',
        component: HomePage,
        exact: true,
        strict: false,
        sensitive: false
    }
];

export const privateRoutes = [
    {
        path: '/profile',
        component: Profile,
        exact: true,
        redirectRoute: '/'
    },
    {
        path: '/make-quiz',
        component: MakeQuiz,
        exact: true,
        redirectRoute: '/'
    },
    {
        path: '/admin',
        component: AdminPanel,
        exact: true,
        redirectRoute: '/'
    }
];

export const adminRoutes = [
    {
        path: '/admin',
        component: AdminPanel,
        exact: true,
        redirectRoute: '/profile'
    }
];
