<template>

    <div class="hero-wrap js-fullheight" >
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
        	<h3 class="v">Luca's loaves - Time to eat Bread</h3>
        	<h3 class="vr">Since - 1985</h3>
          <div class="col-md-11 text-center m-auto">
            <h1>Luca’s Loaves</h1>
            <h2><span>We love baking</span></h2>
          </div>
          <div class="mouse">
						<a href="#" class="mouse-icon">
							<div class="mouse-wheel"><span class="ion-ios-arrow-down"></span></div>
						</a>
					</div>
        </div>
      </div>
    </div>
    <div class="goto-here"></div>
    
  
      <productist :title="title" :subtitle="subtitle" :type="gallery_type" :aligment="alignment"></productist>


    <section class="ftco-section ftco-no-pb ftco-no-pt bg-light py-5">
			<div class="container">
				<div class="row">
					<div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center about-section" >
						<a href="https://vimeo.com/45830194" class="icon d-flex justify-content-center align-items-center">
							<span class="icon-play"></span>
						</a>
					</div>
					<div class="col-md-7 py-5 wrap-about pb-md-5">
	          <div class="heading-section-bold mb-5 mt-md-5">
	          	<div class="ml-md-0">
		            <h2 class="mb-4">We make real bread from the best organic ingredients by hand, with dedication and with the best of care.</h2>
	            </div>
	          </div>
	          <div class="pb-md-5">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, ante a sodales faucibus, purus elit condimentum tortor, a tempus lacus elit vitae lorem. Pellentesque pretium in nunc quis ultrices. Cras sagittis, dolor nec venenatis aliquam, arcu massa lobortis dui, sit amet fermentum leo risus non neque. Nulla feugiat urna hendrerit dignissim blandit. Sed aliquam lectus dapibus, tristique enim a, tristique orci. Aliquam dapibus mattis nunc. Aenean sit amet pellentesque tellus. Aenean congue dui eu nulla imperdiet finibus.</p>
						</div>
					</div>
				</div>
			</div>
	</section>


    <section class="ftco-section bg-light ftco-services">
    	<div class="container">
    		<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center">
            <h1 class="big">Services</h1>
            <h2>We want to express you</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center d-flex align-self-stretch">
            <div class="media block-6 services">
              <div class="icon d-flex justify-content-center align-items-center mb-4">
            		<span class="flaticon-002-recommended"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Sustanaible and organic Resources</h3>
                <p>We make real bread from the best organic ingredients by hand, with dedication and with the best of care.  </p>
              </div>
            </div>      
          </div>
          <div class="col-md-4 text-center d-flex align-self-stretch">
            <div class="media block-6 services">
              <div class="icon d-flex justify-content-center align-items-center mb-4">
            		<span class="flaticon-001-box"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">organic packaging</h3>
                <p></p>
              </div>
            </div>    
          </div>
          <div class="col-md-4 text-center d-flex align-self-stretch">
            <div class="media block-6 services">
              <div class="icon d-flex justify-content-center align-items-center mb-4">
            		<span class="flaticon-003-medal"></span>
              </div>
              <div class="media-body">
                <h3 class="heading">Superior Quality</h3>
                <p></p>
              </div>
            </div>      
          </div>
        </div>
    	</div>
    </section>





<section class="ftco-section ftco-section-more img call-to" >
    	<div class="container">
    		<div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section">
          	<h2>“The sky is the daily bread of the eyes.” —Ralph Waldo Emerson</h2>
          </div>
        </div>
    	</div>
    </section>





		
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
    name:'home',
    components: {
      productist,
    },
    data() {
      return {
        gallery_type:'MOST_VIEWED',
        title:'Bread types ranges',
        subtitle:'Bread types ranges',
        alignment:'center'
      }
    },
    methods: {
      
    },
    computed:{
       shoppingCart() {
        return this.$store.state.cart
    },

    },
    created() {
  }  
}

</script>

<style lang="css">

.example-img{
        background-image: url('../assets/images/image_1.jpg');

}
.hero-wrap{
    background-image: url('../assets/images/breads/bread13.jpg');
    height: 698px;
    background-attachment: fixed;
}    
.about-section{
    background-image: url('../assets/images/breads/bread16.jpg');
}
.call-to{
    background-image: url('../assets/images/breads/bread14.jpg');
}
</style>