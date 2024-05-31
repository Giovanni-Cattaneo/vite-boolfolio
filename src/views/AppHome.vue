<script>
import appHeader from "../components/appHeader.vue";
import appFooter from "../components/appFooter.vue";
import appCard from "../components/appCard.vue"

export default {
    components: {
        appHeader,
        appFooter,
        appCard,
    },
    data() {
        return {
        };
    }
};
</script>

<template>
    <appHeader />
    <div class="container mt-5">
        <h1 class="text-dark">Welcome to my Portfolio</h1>
    </div>
    <appFooter />
</template>

<style scoped></style>