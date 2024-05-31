<script>
import axios from 'axios';

export default {
    name: 'appCard',
    data() {
        return {
            projects: [],
            base_api: 'http://127.0.0.1:8000',
            url_project: '/api/projects'
        }
    },
    methods: {
        callApi() {
            axios.get(this.base_api + this.url_project).then(response => {
                // console.log(response);
                this.projects = response.data.projects.data
                console.log(response)
            }).catch(error => {
                console.error('Error fetching projects:', error);
            });
        },
        cardDetail() {
            console.log('Hello', this)
        }
    },
    mounted() {
        this.callApi();
    }
}
</script>

<template>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-5" v-for="project in projects" :key="project.id">
        <div class="card" @click="cardDetail">
            <img class="card-img-top" :src="base_api + '/storage/' + project.cover_image" alt="Title" />
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">{{ project.description }}</p>
                <p v-if="project.type">{{ project.type.category }}</p>
                <div v-for="technology in project.technologies">
                    <p>{{ technology.name }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style></style>
