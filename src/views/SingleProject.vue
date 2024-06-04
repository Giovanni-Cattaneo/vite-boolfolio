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
    <div class="container">
        <h1 class="text-dark">
            {{ project.title }}
        </h1>

    </div>
</template>

<style></style>