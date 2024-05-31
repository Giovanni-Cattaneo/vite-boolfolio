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

    }
  },
  methods: {
  },

}
</script>

<template>
  <appHeader />


  <div class="container d-flex mt-5">
    <div class="row">
      <router-view>name:projects</router-view>
    </div>
  </div>

  <appFooter />
</template>

<style></style>
