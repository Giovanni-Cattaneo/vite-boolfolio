import { createWebHistory, createRouter } from 'vue-router';

import AppHome from './views/AppHome.vue'
import ProjectsList from './views/ProjectsList.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
    ]
})

export default router
