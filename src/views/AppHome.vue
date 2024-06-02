<script>
import ProjectsList from "./ProjectsList.vue";

export default {
    components: {
        ProjectsList,
    },
    data() {
        return {
        };
    }
};
</script>

<template>
    <div class="jumbo">
        <div class="container">
            <div class="row align-items-md-stretch">
                <div class="col">
                    <div class="h-100 p-5 text-white bg-primary border rounded-3">
                        <h2>Giovanni Cattaneo</h2>
                        <p>
                            Swap the background-color utility and add a `.text-*` color
                            utility to mix up the jumbotron look. Then, mix and match with
                            additional component themes and more.
                        </p>
                        <button class="btn btn-outline-primary" type="button">
                            Example button
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="latest_works mt-5">
        <div class="container">
            <div class="intestation d-flex align-items-center justify-content-center g-3">
                <span></span>
                <h5 class="mx-5 text-center">SOME OF MY LATEST WORKS</h5>
                <span></span>
            </div>
            <div class="latest_projects">
                <div class="row">
                    <div class="col d-flex gap-2 justify-content-evenly">
                        <div class="card">
                            <img class="card-img-top" src="" alt="Title" />
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Text</p>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src="" alt="Title" />
                            <div class="card-body">
                                <h4 class="card-title">Title</h4>
                                <p class="card-text">Text</p>
                            </div>
                        </div>
                        <div class="card">
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
}

.latest_works {
    color: #b2b1b8;

    .intestation {

        & h5 {
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