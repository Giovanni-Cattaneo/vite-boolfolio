<script>
import axios from 'axios';
export default {
    name: 'ProjectsList',
    data() {
        return {
            projects: [],
            base_api: 'http://127.0.0.1:8000',
            url_project: '/api/projects'
        };
    },
    methods: {
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
    },
    mounted() {
        let url = this.base_api + this.url_project;
        this.callApi(url);
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-5" v-for="project in projects.data" :key="project.id">
                <div class="card" @click="cardDetail">
                    <img class="card-img-top" :src="base_api + '/storage/' + project.cover_image" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">{{ project.description }}</p>
                        <p class="card-text" v-if="project.type">{{ project.type.category }}</p>
                        <ul class="list-unstyled" v-for="technology in project.technologies" :key="technology.id">
                            <li class="card-text">{{ technology.name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination Controls -->
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <!-- Previous -->
                <li class="page-item" :class="{ disabled: !projects.prev_page_url }">
                    <button class="page-link" aria-label="Previous" @click="prev(projects.prev_page_url)"
                        :disabled="!projects.prev_page_url">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                <!-- Pages -->
                <li class="page-item" v-for="page in projects.last_page" :key="page"
                    :class="{ active: page === projects.current_page }">
                    <button class="page-link" @click="choosePage(page)">{{ page }}</button>
                </li>

                <!-- Next -->
                <li class="page-item" :class="{ disabled: !projects.next_page_url }">
                    <button class="page-link" aria-label="Next" @click="next(projects.next_page_url)"
                        :disabled="!projects.next_page_url">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>