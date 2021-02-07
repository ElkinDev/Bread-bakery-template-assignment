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

    <section class="ftco-section bg-light">
    	<div class="container-fluid">
    		<div class="row">

                
    			<div class="col-sm col-md-6 col-lg-3">
    				<div class="product">
    					<a href="#" class="img-prod"><img class="img-fluid" src="../assets/images/breads/bread3.jpg" alt="Colorlib Template">
		    						<span class="status">10%</span>
		    			</a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">Sourdough White</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
			    							<p class="price"><span class="mr-2 price-dc">$9.00</span><span class="price-sale">$7.00</span></p>
		    					</div>
		    					<div class="rating">
	    							<p class="text-right">
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    							</p>
	    						</div>
	    					</div>
	    					<hr>
    						<p class="bottom-area d-flex">
    							<a href="javascript:;" @click="add_to_cart" class="add-to-cart"><span>Add to cart <font-awesome-icon :icon="['fas', 'plus']" /></span></a>
    							<a href="javascript:;" @click="add_to_favorites" class="ml-auto"><font-awesome-icon :icon="['fas', 'heart']" /></a>
    						</p>
    					</div>
    				</div>
    			</div>
    			<!-- <div class="col-sm col-md-6 col-lg-3">
    				<div class="product">
    					<a href="#" class="img-prod">
                            <img class="img-fluid" src="../assets/images/breads/Bread6.jpg" alt="Colorlib Template">
    						<span class="status">New Arrival</span>
    					</a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">Sourdough Rye</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span>$8.00</span></p>
		    					</div>
		    					<div class="rating">
	    							<p class="text-right">
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    							</p>
	    						</div>
	    					</div>
	    					<hr>
    						<p class="bottom-area d-flex">
    							<a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
    							<a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-sm col-md-6 col-lg-3">
    				<div class="product">
    					<a href="#" class="img-prod"><img class="img-fluid" src="../assets/images/breads/bread3.jpg" alt=""></a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">Sourdough Spelt</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span>$9.00</span></p>
		    					</div>
		    					<div class="rating">
	    							<p class="text-right">
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    							</p>
	    						</div>
	    					</div>
	    					<hr>
    						<p class="bottom-area d-flex">
    							<a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
    							<a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div class="col-sm col-md-6 col-lg-3">
    				<div class="product">
    					<a href="#" class="img-prod"><img class="img-fluid" src="../assets/images/breads/bread8.jpg" alt=""></a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">Sourdough Seeded</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span>$9.50</span></p>
		    					</div>
		    					<div class="rating">
	    							<p class="text-right">
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    							</p>
	    						</div>
	    					</div>
	    					<hr>
    						<p class="bottom-area d-flex">
    							<a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
    							<a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
    						</p>
    					</div>
    				</div>
    			</div>
    	
    			<div class="col-sm col-md-6 col-lg-3">
    				<div class="product">
    					<a href="#" class="img-prod"><img class="img-fluid" src="../assets/images/breads/bread8.jpg" alt="">
    						<span class="status">New Course</span>
    					</a>
    					<div class="text py-3 px-3">
    						<h3><a href="#">Sourdough breadmaking classes</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span>$350.00</span></p>
		    					</div>
		    					<div class="rating">
	    							<p class="text-right">
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    								<span class="ion-ios-star-outline"></span>
	    							</p>
	    						</div>
	    					</div>
	    					<hr>
    						<p class="bottom-area d-flex">
    							<a href="#" class="add-to-cart"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
    							<a href="#" class="ml-auto"><span><i class="ion-ios-heart-empty"></i></span></a>
    						</p>
    					</div>
    				</div>
    			</div> -->
    		</div>
    		<!-- <div class="row mt-5">
          <div class="col text-center">
            <div class="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li class="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div> -->
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
export default {
    data() {
        return {
            
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