import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.vue';
import Todos from '../pages/todos/index.vue';
import Todo from '../pages/todos/_id.vue';
import TodoCreate from '../pages/todos/create/index.vue';
import Login from '../pages/login/index.vue';
import Signup from '../pages/signup/index.vue';
import Mypage from '../pages/mypage/index.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/todos',
            name: 'Todos',
            component: Todos
        },
        {
            path: '/todos/create',
            name: 'TodoCreate',
            component: TodoCreate
        },
        {
            path: '/todos/:id',
            name: 'Todo',
            component: Todo
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },,
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },,
        {
            path: '/mypage',
            name: 'Mypage',
            component: Mypage
        },
    ]
});

export default router;