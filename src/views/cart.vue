<template>
     <div class="hero-wrap hero-bread cart-banner" >
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-0 bread">Cart</h1>
            <h4></h4>
            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Cart</span></p>
          </div>
        </div>
      </div>
    </div>
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
						        <td class="product-remove" @click="deletefromCart(product.id)"><font-awesome-icon :icon="['fas', 'trash-alt']" /></td>
						        
						        <td class="image-prod"><div class="img" :style="'background-image:url('+product.image_feature+')'"></div></td>
						        
						        <td class="product-name">
						        	<h3>{{product.title}}</h3>
						        	<p>{{product.content}}</p>
						        </td>
						        
						        <td class="price">${{product.price}}</td>
						        
						        <td class="quantity">
						        	<div class="input-group mb-3">
					             	<input type="text" name="quantity" class="quantity form-control input-number" :value="product.quantity" min="1" max="100">
					          	</div>
					          </td>
						        
						        <td class="total">${{product.price * product.quantity}}</td>
						      </tr><!-- END TR-->

						     
						    </tbody>
						  </table>
					  </div>
    			</div>
    		</div>
    		<div class="row justify-content-end"  v-if="get_cart.length">
    			<div class="col col-lg-5 col-md-6 mt-5 cart-wrap">
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
						<router-link tag="a" class="btn btn-primary py-3 px-4" to="/checkout">Proceed to Checkout</router-link>						
					</p>
    			</div>
    		</div>

            <div class="row" v-if="!get_cart.length">
                <div class="col-md-12 text-center">
                    <h4>None products added yet</h4>
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
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    methods: {
        deletefromCart(productID){
            this.$store.commit('removeItemCart', productID)

		},
		update_quantity(productID){

			console.log(productID)

		}
    },
    
    computed:{
		 ...mapGetters({
      products: 'get_carts'
    	}),
        get_cart(){
           console.log(this.$store.getters.get_carts)
	
           return this.$store.getters.get_carts
		},   
		
		  total () {
			return this.products.reduce((total, p) => {
				return total + p.price * p.quantity
			}, 0)
    	}
	},
	watch:{
      product () {
         // my new value in val. Perform your
         // select update methods here
     }
  }
}
</script>
<style scoped >
    .cart-banner{
        background-image: transparent !important;
        height: auto;
        background: none !important;

    }
</style>