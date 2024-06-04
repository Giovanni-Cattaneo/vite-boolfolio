import { reactive } from 'vue'
import axios from 'axios';
import { animate } from 'motion'

export const state = reactive({
    projects: [],
    base_api: 'http://127.0.0.1:8000',
    url_project: '/api/projects',
    projectsList: [],

    callApi(url) {
        axios.get(url).then(response => {
            this.projects = response.data.projects
        }).catch(error => {
            console.error('Error fetching projects:', error);
        });
    },
    prev(url) {
        this.callApi(url);
    },

    next(url) {
        this.callApi(url);
    },

    choosePage(page) {
        let url = `${this.base_api}${this.url_project}?page=${page}`;
        this.callApi(url);
    },

    allApi() {
        axios.get('http://127.0.0.1:8000/api/projectsAll').then(response => {
            this.projectsList = response.data.projects
        }).catch(error => {
            console.error('Error fetching projects:', error);
        });
    },

    timing() {
        this.allApi()
        setTimeout(() => {
            const h1 = document.getElementById("count")

            animate(
                (progress) => count.innerHTML = Math.round(progress * this.projectsList.length),
                { duration: 2, easing: "ease-out" }
            )
        }, 1000)

    }

});
