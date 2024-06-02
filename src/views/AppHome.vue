<script>
import ProjectsList from "./ProjectsList.vue";
import axios from 'axios';

export default {
    components: {
        ProjectsList,
    },
    data() {
        return {
            projects: [],
            base_api: 'http://127.0.0.1:8000',
            url_project: '/api/projects'
        };
    },
    methods: {
        callApi() {
            axios.get(this.base_api + this.url_project).then(response => {
                console.log(response);
                this.projects = response.data.projects.data
                console.log(response)
            }).catch(error => {
                console.error('Error fetching projects:', error);
            });
        },
        cardDetail() {
            console.log('Hello', this)
        }
    },
    mounted() {
        this.callApi();
    }
};
</script>

<template>
    <div class="jumbo">
        <div class="container">
            <div class="row align-items-md-stretch">
                <div class="col d-flex">
                    <div class="back text-center">
                        <h3>Back-end</h3>
                        <p>Abile nello sviluppo di funzionalità e programmi</p>
                    </div>
                    <div class="mt-5 text-center mx-auto">
                        <h2>Giovanni Cattaneo</h2>
                        <p>Full Stack Web Developer</p>
                    </div>
                    <div class="front text-center">
                        <h3>Front-end</h3>
                        <p>Capacità di costruzione di layout complessi e stratificati</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="latest_works mt-5">
        <div class="container">
            <div class="intestation d-flex align-items-center justify-content-center g-3">
                <span></span>
                <h6 class="mx-5 text-center">SOME OF MY LATEST WORKS</h6>
                <span></span>
            </div>
            <div class="latest_projects pt-5">
                <div class="row">
                    <div v-for="project in projects" class="col d-flex gap-2 justify-content-evenly flex-wrap">
                        <div class="card" v-if="project.favourites">
                            <img class="card-img-top" src="" alt="Title" />
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Text</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    </div>

</template>

<style scoped>
.jumbo {
    background-color: var(--jumbotron-bg-and-text);
    background-image: url(../../public/jumbo-bg-img.jpg);
    background-size: contain;
    color: var(--text-dark);
    position: relative;
    min-height: 300px;

    .front,
    .back {
        position: absolute;
        top: 5rem;
        width: 250px;
    }

    .front {
        left: 20rem;
    }

    .back {
        right: 20rem;
    }
}

.latest_works {
    color: #b2b1b8;

    .intestation {

        & h6 {
            width: 20%;
        }

        & span {
            background-color: #c4c2ca;
            width: 40%;
            margin: auto;
            height: 2px;
            border-radius: 0.2rem;

        }

    }

    .card {
        width: 25%;
        height: 200px;
    }

}
</style>