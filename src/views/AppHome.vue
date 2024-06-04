<script>
import ProjectsList from "./ProjectsList.vue";
import axios from 'axios';
import { state } from '../state.js'

export default {
    components: {
        ProjectsList,
    },
    data() {
        return {
            state,
            projects: [],
            base_api: 'http://127.0.0.1:8000',
            url_project: '/api/favourites'
        };
    },
    methods: {
        callApi() {
            axios.get(this.base_api + this.url_project).then(response => {
                console.log(response);
                this.projects = response.data.favourites.data
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
                    <div v-for="project in projects" class="col-12 col-sm-6 col-md-4 col-lg-3 g-5 d-flex">
                        <router-link :to="{ name: 'SingleProject', params: { slug: project.slug } }">
                            <div class="card">
                                <img class="card-img-top" :src="base_api + '/storage/' + project.cover_image"
                                    alt="Title" />
                                <div class="card-body">
                                    <h4 class="card-title">
                                        {{ project.title }}
                                    </h4>
                                    <hr>
                                    <p class="card-text">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </router-link>

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
    min-height: 350px;

    .front,
    .back {
        position: absolute;
        top: 8rem;
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

    & a {
        color: inherit;
        text-decoration: none;
    }

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

}
</style>