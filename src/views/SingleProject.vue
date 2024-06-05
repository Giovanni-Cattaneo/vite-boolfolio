<script>
import axios from 'axios';

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
        <div class="right">
            <p>{{ project.description }}</p>
        </div>
        <div class="left" v-if="project.cover_image">
            <img :src="project.cover_image" alt="">
        </div>
        <div class="left" v-else>
            <img src="../../public/avatar_temp.avif" alt="">
            <p>nessuna immagine</p>
        </div>


    </div>
</template>

<style></style>