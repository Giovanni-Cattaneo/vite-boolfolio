<script>
export default {
    name: 'AppAbout',
    data() {
        return {
        };
    }
};
</script>

<template>
    <div class="container text-dark mt-5">
        <h1>Welcome to App About</h1>
        <p>This is the about page</p>
    </div>

    <div class="bio container d-flex flex-column gap-5">
        <div class="d-flex gap-5">
            <div class="left">
                <h3>Summary</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus, eius nihil expedita itaque
                    hic
                    placeat obcaecati neque laboriosam vitae eveniet soluta ut numquam officia dicta necessitatibus
                    impedit
                    dolore eaque. Aliquid quod temporibus praesentium error perspiciatis veritatis architecto hic sunt
                    velit. Natus nesciunt laborum molestiae ducimus libero unde sint, earum similique eum doloremque
                    illum
                    consequatur distinctio quae iure quo et. Velit culpa soluta quibusdam maiores perspiciatis nobis
                    consequatur ipsam in ex aspernatur sunt incidunt sapiente natus inventore qui molestias voluptate
                    odit
                    amet, ullam vero iusto eius optio non? Ducimus pariatur et aut nobis provident atque tempore
                    exercitationem dignissimos quasi at.</p>
            </div>
            <div class="right">
                <img src="../../public/avatar_temp.avif" alt="">
            </div>
        </div>

        <div class="experience d-flex gap-5">
            <div class="left">
                <img src="../../public/boolean-logo.png" alt="" width="300">
            </div>
            <div class="right d-flex flex-column align-items-end">
                <h3>Training</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fugit est, hic ab qui omnis obcaecati
                    laudantium odit veniam? Repellat illo consequuntur molestias sint repellendus optio, reiciendis quos
                    sapiente in obcaecati non perspiciatis unde delectus ducimus, ut, ullam aliquid? Sed eaque quis
                    incidunt exercitationem repudiandae explicabo facere corporis commodi esse!</p>
            </div>
        </div>
    </div>

</template>

<style scoped></style>