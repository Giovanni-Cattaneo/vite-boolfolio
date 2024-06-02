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
      <router-view></router-view>
    </div>
  </div>
  <appFooter />
</template>

<style></style>
