<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container text-dark mt-5">
        <h1>Not Found, Sorry <i class="fa-solid fa-skull"></i></h1>
        <p>it seems this page doesen't exist, try going to <router-link :to="{ name: 'home' }">Home</router-link></p>
    </div>

</template>

<style></style>