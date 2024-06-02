<script>

export default {
    name: 'appFooter',
    data() {
        return {

        }
    },
    methods: {
    },
}
</script>

<template>
    <footer>
        <div class="container d-flex justify-content-between p-5">
            <div class="copy">
                &copy;
                <span>2024 Giovanni cattaneo</span>
            </div>
            <div class="footer_links d-flex gap-2">

                <router-link :to="{ name: 'projects' }">progetti</router-link>

                <router-link :to="{ name: 'about' }">about</router-link>

                <router-link :to="{ name: 'contacts' }">contatti</router-link>

            </div>
        </div>




    </footer>
</template>

<style scoped>
footer {
    background-color: var(--footer-bg);
    color: black;
    margin-top: 5rem;

    & a {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid transparent;
    }

    & a:hover {
        border-bottom: 1px solid;
    }
}
</style>
