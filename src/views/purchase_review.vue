<template>
    <section class="hero-wrap hero-bread transparent-banner" >
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-0 bread">Purchase Review</h1>
            <h4>Your purchase id number is this</h4>
            <p class="breadcrumbs"><span class="mr-2"><a to="/home">home</a></span> <span>Purchase Review</span></p>
          </div>
        </div>
      </div>
    </section>


            
</template>

<script>
// import { mapGetters } from 'vuex'
// import {scroller} from 'vue-scrollto/src/scrollTo'
// import Swal from 'sweetalert2'
// const firstScrollTo = scroller()

export default {
    
    data() {
        return {
      
        }
    },
    methods: {
       
    },

    mounted() {
                 console.log('loadme this', this.$route.params.id)

    },
    
    computed:{
        
       
	},

}
</script>

<style>
     .transparent-banner{
        background-image: transparent !important;
        height: auto;
        background: none !important;

    }


</style>