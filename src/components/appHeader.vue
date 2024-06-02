<script>

export default {
    name: 'appHeader',
    data() {
        return {

        }
    },
    methods: {
    },
}
</script>

<template>
    <header>
        <div class="container d-flex">
            <div>
                <img src="../../public/token-g.png" alt="">
            </div>
            <div>
                <ul class="d-flex list-unstyled">
                    <li>
                        <router-link :to="{ name: 'home' }">home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'projects' }">progetti</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'about' }">about</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contacts' }">contatti</router-link>
                    </li>
                </ul>
            </div>
            <div class="d-flex">

            </div>
        </div>



    </header>
</template>

<style>
header {
    background-color: var(--navbar-primary);
    color: var(--jumbotron-bg-and-text);

    & a {
        color: var(--jumbotron-bg-and-text);
        text-decoration: none;
    }
}
</style>
