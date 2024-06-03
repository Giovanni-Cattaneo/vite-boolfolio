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
                console.log(response);
                this.project = response.data.response;
            }).catch(error => {
                console.error('Errore nel recupero dei progetti:', error);
            });
        }
    },
    mounted() {
        this.callApi();
    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-dark">
            {{ project.title }}
        </h1>

    </div>
</template>

<style></style>