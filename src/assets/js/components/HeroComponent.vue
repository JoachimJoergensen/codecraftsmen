<template>
    <section>
        <section v-for="hero in heros" :key="hero.hero_content_text" class="hero-section p-10" v-bind:style="{ backgroundImage: 'url(' + hero.hero_background_image.url + ')' }" >
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h1 class="hero-section__title">
                            {{ hero.hero_content_text }}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    data(){
        
        return {
            
            heros: {}

        }

    },
    created: function() {
                
        this.$http.get('wp/v2/pages/34').then(response => {
            
            this.heros = response.data.acf.hero;

        }, error => { 
            
            
            console.log( error ); 

        });
    }
}
</script>