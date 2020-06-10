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
    },
    {
        path: '/profile',
        component: Profile,
        exact: true,
        strict: false,
        sensitive: false
    },
    {
        path: '/make-quiz',
        component: MakeQuiz,
        exact: true,
        strict: false,
        sensitive: false
    },
    {
        path: '/admin',
        component: AdminPanel,
        exact: true,
        strict: false,
        sensitive: false
    }
];

export const privateRoutes = [
    {
        path: '/dashboard',
        component: null,
        exact: true,
        strict: false,
        sensitive: false,
        redirectRoute: '/login'
    }
];
