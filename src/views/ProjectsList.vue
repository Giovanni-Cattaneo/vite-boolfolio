<script>
import axios from 'axios';
import { state } from '../state.js'
import { animate } from 'motion';
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
        state.timing();
    }
};
</script>

<template>
    <div class="container text-dark">
        <h2 class="mt-3">Complete Project List</h2>
        <div class="d-flex">
            <h4>N. Progetti: </h4>
            <h4 id="count"> 0</h4>
        </div>
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
        <nav aria-label="Page navigation ">
            <ul class="pagination py-4">
                <!-- Previous -->
                <li class="page-item" :class="{ disabled: !state.projects.prev_page_url }">
                    <button class="page-link" aria-label="Previous" @click="state.prev(state.projects.prev_page_url)"
                        :disabled="!state.projects.prev_page_url">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                <!-- Pages -->
                <li class="page-item" v-for="page in state.projects.last_page" :key="page"
                    :class="{ active: page === state.projects.current_page }">
                    <button class="page-link" @click="state.choosePage(page)">{{ page }}</button>
                </li>

                <!-- Next -->
                <li class="page-item" :class="{ disabled: !state.projects.next_page_url }">
                    <button class="page-link" aria-label="Next" @click="state.next(state.projects.next_page_url)"
                        :disabled="!state.projects.next_page_url">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.card {
    height: 500px;
}
</style>