<template>
    <section class="hero-wrap hero-bread transparent-banner" >
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-0 bread">Purchase Review</h1>
            <h4>Purchase # {{purchase_id}}</h4>
            <p class="breadcrumbs"><span class="mr-2"><a to="/home">shop</a></span> <span>Purchase Review</span></p>
          </div>
        </div>
      </div>
    </section>

        <section class="ftco-section ftco-cart">
			<div class="container">
				<div class="row">
    			<div class="col-md-12">
    				<div class="cart-list">
                     
	    				<table class="table" v-if="get_cart.length" >
						    <thead class="thead-primary">
						      <tr class="text-center">
						        <th>&nbsp;</th>
						        <th>&nbsp;</th>
						        <th>Product</th>
						        <th>Price</th>
						        <th>Quantity</th>
						        <th>Total</th>
						      </tr>
						    </thead>
						    <tbody>


						      <tr class="text-center" v-for="product in get_cart" :key="product.id">
						        
						        <td class="image-prod"><div class="img" :style="'background-image:url('+product.image_feature+')'"></div></td>
						        
						        <td class="product-name">
						        	<h3>{{product.title}}</h3>
						        	<p>{{product.content}}</p>
						        </td>
						        
						        <td class="price">${{product.price}}</td>
						        
						        <td class="quantity">
						        	<div class="input-group mb-3">
					             	<input type="text" name="quantity" class="quantity form-control input-number " disabled :value="product.quantity" min="1" max="100">
					          	</div>
					          </td>
						        
						        <td class="total">${{product.price * product.quantity}}</td>
						      </tr><!-- END TR-->

						     
						    </tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		<div class="row justify-content-end"  v-if="get_cart.length && get_purchase_s">
                




     
                  <div class="col col-lg-7 col-md-12 mt-5 ">
                      <h3 class="mb-4 billing-heading">Billing Details</h3>
                            <div class="row align-items-end">
                                <div class="col-md-6">
                                <div class="form-group">
                                    <label for="firstname">Firt Name</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="name" :value="get_purchase_s.name" disabled placeholder="">
                                    
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="lastname">Last Name</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="lastname" :value="get_purchase_s.lastname" ref="lastname" disabled placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="w-100"></div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="">State / Country <br> <small>Purchases only available in Australia for now.</small></label>
                                        <h6>{{get_purchase_s.state}}</h6>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                    <label for="">Street Address</label>
                                    <div class="input-group">

                                        <input type="text" class="form-control" name="address" :value="get_purchase_s.address" disabled >
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <div class="input-group">
                                        <input type="text" class="form-control" ref="optional" :value="get_purchase_s.optional_address" disabled name="optional" >
                                        </div>
                                </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                    <label for="towncity">Town / City</label>
                                    <div class="input-group">
                                <input type="text" class="form-control" ref="city" name="city" :value="get_purchase_s.city" disabled placeholder="" >
                                </div>
                                </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label >Postcode / ZIP *</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control"  :value="get_purchase_s.postcode" disabled name="postcode" placeholder="" >
                                    </div>
                                </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone">Phone</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" :value="get_purchase_s.phone" disabled name="phone" placeholder="" >
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="emailaddress">Email Address</label>
                                    <div class="input-group">
                                        <input type="email" class="form-control"  :value="get_purchase_s.emailAddress" disabled name="email" placeholder="">
                                    </div>
                                </div>
                            </div>
                            <div class="w-100"></div>
                            
                            </div>


                  </div>








    			<div class="col-12 col-lg-5 col-md-12 mt-5 cart-wrap">
    				<div class="cart-total mb-3">
    					<h3>Cart Totals</h3>
    					<p class="d-flex">
    						<span>Subtotal</span>
    						<span>${{total}}</span>
    					</p>
    					<p class="d-flex">
    						<span>Delivery</span>
    						<span>$0.00</span>
    					</p>
    					<p class="d-flex">
    						<span>Discount</span>
    						<span>$0.00</span>
    					</p>
    					<hr>
    					<p class="d-flex total-price">
    						<span>Total</span>
    						<span>${{total}}</span>
    					</p>
    				</div>
    				<p class="text-center">
						<router-link tag="a" class="btn btn-primary py-3 px-4" to="/">Go to my account</router-link>						
					</p>
    			</div>
    		</div>

            <div class="row" v-if="!get_cart.length">
                <div class="col-md-8 text-center offset-md-2">
                    <h4>None purchase has been done, please go to shop and add your desired products to the cart.</h4>
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
// import { mapGetters } from 'vuex'
// import {scroller} from 'vue-scrollto/src/scrollTo'
// import Swal from 'sweetalert2'
// const firstScrollTo = scroller()
import { mapGetters } from 'vuex'


export default {

    
    
    data() {
        return {
            cart_products_summary:[],
            cart_purchase_summary:[],
            purchase_id:null,
        }
    },
    methods: {
       
    },

    mounted() {

                          this.purchase_id=this.$route.params.id
                          this.cart_products_summary=this.$store.getters.get_summary_cart_products
                          this.cart_summary=this.$store.getters.get_summary_cart_purchase


    },
    
    computed:{

         ...mapGetters({
            products_review: 'get_summary_cart_products'
    	}),
        
        get_cart(){	
           return this.$store.getters.get_summary_cart_products
        },  
        get_purchase_s(){	
            console.log('log this one',this.$store.getters.get_summary_cart_purchase)
           return this.$store.getters.get_summary_cart_purchase
        }, 
        
        total () {
			return 0;
    	}
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