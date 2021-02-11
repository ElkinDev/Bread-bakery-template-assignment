<template>
    <div class="hero-wrap hero-bread cart" >
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-0 bread">We every single day strive to do our best in making the bread with love and prime</h1>
            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>shop</span></p>
          </div>
        </div>
      </div>
    </div>

      <productist :title="title" :subtitle="subtitle" :type="gallery_type" :aligment="alignment"></productist>


	<section class="ftco-section-parallax">
      <div class="parallax-img d-flex align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center py-5">
            <div class="col-md-7 text-center heading-section">
            	<h1 class="big">Subscribe</h1>
              <h2>Subcribe to our Newsletter</h2>
              <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-8">
                  <form action="#" class="subscribe-form">
                    <div class="form-group d-flex">
                      <input type="text" class="form-control" placeholder="Enter email address">
                      <input type="submit" value="Subscribe" class="submit px-3">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>


<script>
import productist from '@/components/product_listing.vue'

export default {
	components: {
      productist,
    },
    data() {
        return {
			gallery_type:'SHOP',
			title:'Breads',
			subtitle:'Breads',
			alignment:'center'
        }
    },
    methods: {
       
        
    },
    mounted() {


    },
}
</script>

<style >
    .cart{
        background-image: none;
        height: auto;
        background-attachment: fixed;
        background-position: top;

    }
</style>