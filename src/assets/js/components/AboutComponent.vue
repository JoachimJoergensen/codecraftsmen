<template>
    <section class="about-section p-10">
        <div class="container">
            <h3 class="about-section__title">About us</h3>
            <div class="columns">
                <div class="column">
                    <div v-for="about in abouts" :key="about.about_title" class="text-box">
                        <header class="text-box__header">
                            <h4 class="text-box__header__title"> {{ about.about_title }} </h4>
                        </header>
                        <div class="text-box__body">
                            {{ about.about_content }}
                        </div>
                        <footer class="text-box__footer">
                            <button class="btn text-box__footer__btn">Read more</button>
                        </footer>
                    </div>
                </div>
                <div class="column">
                    <div class="about-section__image" style="background-image: url('https://images.unsplash.com/photo-1539545880148-642b8c315b4d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3419b28d098f1f62085c5f4da888ab05&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb');"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        
        return {
            
            abouts: {}

        }

    },
    created: function() {
                
        this.$http.get('wp/v2/pages/21').then(response => {
            
            this.abouts = response.data.acf.about;

        }, error => { 
            
            
            console.log( error ); 

        });
    }
}
</script>