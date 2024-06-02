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
    <header class="py-2">
        <div class="container d-flex align-items-center justify-content-between">
            <div>
                <img class="logo" src="../../public/token-g.png" alt="">
            </div>
            <div>
                <ul class="nav d-flex list-unstyled gap-3">
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
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>



    </header>
</template>

<style scoped>
header {
    background-color: var(--navbar-primary);
    color: var(--jumbotron-bg-and-text);

    & a {
        color: var(--jumbotron-bg-and-text);
        text-decoration: none;
        border-bottom: 3px solid transparent;
    }

    & a:hover {
        border-bottom: 3px solid var(--jumbotron-bg-and-text);
    }

    .logo {
        width: 50px;
    }
}
</style>
