import { createWebHistory, createRouter } from 'vue-router';

import AppHome from './views/AppHome.vue';
import ProjectsList from './views/ProjectsList.vue';
import AppAbout from './views/AppAbout.vue';
import AppContacts from './views/AppContacts.vue';
import AppBlog from './views/AppBlog.vue';
import SingleProject from './views/SingleProject.vue';

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
        },
        {
            path: '/project/:slug',
            name: 'SingleProject',
            component: SingleProject
        },
        {
            // path: '/:pathMatch(.*)*',
            // name: 'not-found',
            // component: NotFound
        }

    ]
})

export default router
