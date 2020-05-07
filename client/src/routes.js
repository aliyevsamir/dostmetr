import HomePage from './components/HomePage/HomePage';
import MakeQuiz from './components/Quiz/CreateQuiz/MakeQuiz';

export const publicRoutes = [
    {
        path: '/',
        component: HomePage,
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
