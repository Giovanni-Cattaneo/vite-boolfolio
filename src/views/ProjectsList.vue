<script>
import axios from 'axios';
import { state } from '../state.js'
export default {
    name: 'ProjectsList',
    data() {
        return {
            state,

        };
    },
    methods: {
    },
    mounted() {
        let url = state.base_api + state.url_project;
        state.callApi(url);
    }
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-5" v-for="project in state.projects.data" :key="project.id">
                <div class="card" @click="cardDetail">
                    <img class="card-img-top" :src="state.base_api + '/storage/' + project.cover_image" alt="Title" />
                    <div class="card-body">
                        <router-link :to="{ name: 'SingleProject', params: { slug: project.slug } }">{{
                            project.title }}</router-link>
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
                <li class="page-item" :class="{ disabled: !state.projects.prev_page_url }">
                    <button class="page-link" aria-label="Previous" @click="prev(state.projects.prev_page_url)"
                        :disabled="!state.projects.prev_page_url">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                <!-- Pages -->
                <li class="page-item" v-for="page in state.projects.last_page" :key="page"
                    :class="{ active: page === state.projects.current_page }">
                    <button class="page-link" @click="choosePage(page)">{{ page }}</button>
                </li>

                <!-- Next -->
                <li class="page-item" :class="{ disabled: !state.projects.next_page_url }">
                    <button class="page-link" aria-label="Next" @click="next(state.projects.next_page_url)"
                        :disabled="!state.projects.next_page_url">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped></style>