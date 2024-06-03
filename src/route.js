import { createWebHistory, createRouter } from 'vue-router';

import AppHome from './views/AppHome.vue';
import ProjectsList from './views/ProjectsList.vue';
import AppAbout from './views/AppAbout.vue';
import AppContacts from './views/AppContacts.vue';
import AppBlog from './views/AppBlog.vue';


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
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog,
        }
    ]
})

export default router
