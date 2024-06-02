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
  <router-view></router-view>
  <appFooter />
</template>

<style></style>
