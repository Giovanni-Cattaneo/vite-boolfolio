<script>
import axios from 'axios';
import appHeader from "./components/appHeader.vue";
import appFooter from "./components/appFooter.vue";

export default {
  components: {
    appHeader,
    appFooter,
  },
  name: 'App',
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    callApi() {
      axios.get('http://127.0.0.1:8000/api/projects').then(response => {
        //console.log(response);
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

  <div class="d-flex" v-for="project in projects.data" :key="project.id">
    <h1>
      {{ project.title }}
    </h1>
    <p>{{ project.description }}</p>
  </div>
</template>

<style></style>
