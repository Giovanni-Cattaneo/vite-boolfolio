import { reactive } from 'vue'
import axios from 'axios';

export const state = reactive({
    projects: [],
    base_api: 'http://127.0.0.1:8000',
    url_project: '/api/projects',

    callApi(url) {
        axios.get(url).then(response => {
            console.log(response);
            this.projects = response.data.projects
            console.log(response)
        }).catch(error => {
            console.error('Error fetching projects:', error);
        });
    },
    cardDetail() {
        console.log('Hello', this)
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
    }
});