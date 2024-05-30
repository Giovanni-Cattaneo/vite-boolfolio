<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    callApi() {
      axios.get('http://127.0.0.1:8000/api/projects').then(response => {
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
  <div v-for="project in projects.data" :key="project.id">
    <h1>
      {{ project.title }}
    </h1>
  </div>
  <h1>Ciao</h1>
</template>

<style></style>
