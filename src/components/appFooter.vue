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
    <footer class="mt-5">
        <div class="container d-flex justify-content-between py-3">
            <ul class="list-unstyled text-dark">
                <li><a href="" class=" text-decoration-none">Lorem, ipsum.</a></li>
                <li><a href="" class=" text-decoration-none">Modi, quae.</a></li>
                <li><a href="" class=" text-decoration-none">Odio, aperiam.</a></li>
                <li><a href="" class=" text-decoration-none">Dolorum, deleniti.</a></li>
                <li><a href="" class=" text-decoration-none">Adipisci, quibusdam?</a></li>
            </ul>
            <ul class="list-unstyled">
                <li><a href="" class=" text-decoration-none">Lorem, ipsum.</a></li>
                <li><a href="" class=" text-decoration-none">Reiciendis, facere?</a></li>
                <li><a href="" class=" text-decoration-none">Voluptate, provident?</a></li>
                <li><a href="" class=" text-decoration-none">Quo, repudiandae.</a></li>
                <li><a href="" class=" text-decoration-none">Laudantium, voluptates.</a></li>
            </ul>
            <ul class="list-unstyled">
                <li><a href="" class=" text-decoration-none">Lorem, ipsum.</a></li>
                <li><a href="" class=" text-decoration-none">Cumque, aut.</a></li>
                <li><a href="" class=" text-decoration-none">Voluptatibus, libero!</a></li>
                <li><a href="" class=" text-decoration-none">Eaque, pariatur.</a></li>
                <li><a href="" class=" text-decoration-none">Iusto, natus?</a></li>
            </ul>
        </div>


    </footer>
</template>

<style scoped>
footer {
    background-color: var(--footer-bg);
    color: black;

    & a {
        color: inherit;
    }

    & a:hover {
        border-bottom: 1px solid;
    }
}
</style>
