<script>
import axios from 'axios';
import appHeader from "./components/appHeader.vue";
import appFooter from "./components/appFooter.vue";
import appCard from "./components/appCard.vue"

export default {
  components: {
    appHeader,
    appFooter,
    appCard,
  },
  name: 'App',
  data() {
    return {
      projects: [],
      base_api: 'http://127.0.0.1:8000/api/projects/',
    }
  },
  methods: {
    callApi() {
      axios.get(this.base_api).then(response => {
        console.log(response);
        this.projects = response.data.projects
      }).catch(error => {
        console.error('Error fetching projects:', error);
      });
    }
  },
  mounted() {
    this.callApi();
  }
}
</script>

<template>
  <appHeader />

  <div class="container d-flex mt-5">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 g-5" v-for="project in projects.data" :key="project.id">
        <div class="card">
          <img class="card-img-top" :src="base_api + 'storage/' + project.cover_image" alt="Title" />
          <div class="card-body">
            <h4 class="card-title">{{ project.title }}</h4>
            <p class="card-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
