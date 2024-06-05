<script>
import axios from 'axios';
import { state } from '../state.js';

export default {
    data() {
        return {
            project: {},
            base_api: 'http://127.0.0.1:8000/api/',
            url_project: 'projects/'
        }
    },
    methods: {
        callApi() {
            const projectSlug = this.$route.params.slug;
            const fullUrl = this.base_api + this.url_project + projectSlug;
            axios.get(fullUrl).then(response => {
                if (response.data.success) {
                    this.project = response.data.response;
                    console.log(this.project)
                } else {

                }
            })
        }
    },
    mounted() {
        this.callApi();
    }
}
</script>

<template>
    <div class="container mt-5">
        <h1 class="text-dark text-center">
            {{ project.title }}
        </h1>
        <div class="content d-flex gap-2 mt-5">
            <div class="left" v-if="project.cover_image">
                <img :src="'http://127.0.0.1:8000' + '/storage/' + project.cover_image" alt="" width="50%">
            </div>
            <div class="left" v-else>
                <img src="../../public/avatar_temp.avif" alt="" width="">
                <p>immagine standard</p>
            </div>
            <div class="right text-dark">
                <p>{{ project.description }}</p>
            </div>
        </div>



    </div>
</template>

<style></style>