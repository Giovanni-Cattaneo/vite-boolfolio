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
                <router-link :to="{ name: 'home' }"><img class="logo" src="../../public/token-g.png"
                        alt=""></router-link>
            </div>
            <div>
                <ul class="nav d-flex list-unstyled gap-3 flex-wrap">
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
                    <li>
                        <router-link :to="{ name: 'blog' }">blog</router-link>
                    </li>
                </ul>
            </div>
            <div class="social d-md-flex gap-2 d-none">
                <a href="https://github.com/Giovanni-Cattaneo" class="nav-link" target="_blank"><i
                        class="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/Giovanni-Cattaneo" class="nav-link" target="_blank"><i
                        class="fa-brands fa-github"></i></a>
                <a href="https://github.com/Giovanni-Cattaneo" class="nav-link" target="_blank"><i
                        class="fa-brands fa-linkedin-in"></i></a>
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
        padding: 0.3rem 0;
        transition: color 200ms;
    }

    .router-link-active,
    .router-link-exact-active {
        color: rgb(151, 151, 151);
    }

    & a:hover {
        color: rgb(151, 151, 151);
    }

    .logo {
        width: 60px;
    }

    .social {

        .fa-brands {
            font-size: 1.9rem;
        }
    }
}
</style>
