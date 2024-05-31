import { createWebHistory, createRouter } from 'vue-router';

import AppHome from './views/AppHome.vue';
import ProjectsList from './views/ProjectsList.vue';
import AppAbout from './views/AppAbout.vue';
import AppContacts from './views/AppContacts.vue';


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
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
    ]
})

export default router
