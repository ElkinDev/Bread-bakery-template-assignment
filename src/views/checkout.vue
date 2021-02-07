<template>
    <div class="hero-wrap hero-bread transparent-banner" >
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9  text-center">
            <h1 class="mb-0 bread">Checkout</h1>
            <h4></h4>
            <p class="breadcrumbs"><span class="mr-2"><a to="/cart">Cart</a></span> <span>Checkout</span></p>
          </div>
        </div>
      </div>
    </div>
	<section class="ftco-section pt-0" v-if="get_cart.length">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 ">
			  <form action="#" class="billing-form bg-light p-3 p-md-5">
							<h3 class="mb-4 billing-heading">Billing Details</h3>
	          	<div class="row align-items-end">
	          		<div class="col-md-6">
	                <div class="form-group">
	                	<label for="firstname">Firt Name</label>
	                  <input type="text" class="form-control" v-model="name" placeholder="">
	                </div>
	              </div>
	              <div class="col-md-6">
	                <div class="form-group">
	                	<label for="lastname">Last Name</label>
	                  <input type="text" class="form-control" v-model="lastname" placeholder="">
	                </div>
                </div>
                <div class="w-100"></div>
		            <div class="col-md-12">
		            	<div class="form-group">
		            		<label for="country">State / Country</label>
		            		<div class="select-wrap">
		                  <div class="icon"><span class="ion-ios-arrow-down"></span></div>
		                  <select name="" id="" class="form-control" v-model="state">
		                  	<option value="">France</option>
		                    <option value="">Italy</option>
		                    <option value="">Philippines</option>
		                    <option value="">South Korea</option>
		                    <option value="">Hongkong</option>
		                    <option value="">Japan</option>
		                  </select>
		                </div>
		            	</div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
		            	<div class="form-group">
	                	<label for="streetaddress">Street Address</label>
	                  <input type="text" class="form-control" v-model="street" placeholder="House number and street name">
	                </div>
		            </div>
		            <div class="col-md-6">
		            	<div class="form-group">
	                  <input type="text" class="form-control" v-model="optional_address" placeholder="Appartment, suite, unit etc: (optional)">
	                </div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
		            	<div class="form-group">
	                	<label for="towncity">Town / City</label>
	                  <input type="text" class="form-control" placeholder="" v-model="city">
	                </div>
		            </div>
		            <div class="col-md-6">
		            	<div class="form-group">
		            		<label for="postcodezip">Postcode / ZIP *</label>
	                  <input type="text" class="form-control" placeholder="" v-model="postcode">
	                </div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
	                <div class="form-group">
	                	<label for="phone">Phone</label>
	                  <input type="text" class="form-control" placeholder="" v-model="phone">
	                </div>
	              </div>
	              <div class="col-md-6">
	                <div class="form-group">
	                	<label for="emailaddress">Email Address</label>
	                  <input type="text" class="form-control" placeholder="" v-model="emailAddress">
	                </div>
                </div>
                <div class="w-100"></div>
                <div class="col-md-12">
                	<div class="form-group mt-4">
							<div class="radio">
										  <label class="mr-3"><input type="radio" name="optradio" v-model="create_account"> Create an Account? </label>
										  <label><input type="radio" name="optradio" disabled> Ship to different address (not avalaible for now.)</label>
										</div>
						    </div>
                </div>
	            </div>
	          </form><!-- END -->



	          <div class="row mt-5 pt-3 d-flex">
	          	<div class="col-md-6 d-flex">
	          		<div class="cart-detail cart-total bg-light p-3 p-md-4">
	          			<h3 class="billing-heading mb-4">Cart Total</h3>
	          			<p class="d-flex">
		    						<span>Subtotal</span>
		    						<span>{{total}}</span>
		    					</p>
		    					<p class="d-flex">
		    						<span>Delivery</span>
		    						<span>$0.00</span>
		    					</p>
		    					<p class="d-flex">
		    						<span>Discount</span>
		    						<span>$3.00</span>
		    					</p>
		    					<hr>
		    					<p class="d-flex total-price">
		    						<span>Total</span>
		    						<span>{{total}}</span>
		    					</p>
								</div>
	          	</div>
	          	<div class="col-md-6">
	          		<div class="cart-detail bg-light p-3 p-md-4">
	          			<h3 class="billing-heading mb-4">Payment Method</h3>
									<div class="form-group">
										<div class="col-md-12">
											<div class="radio">
											   <label><input type="radio" name="optradio" class="mr-2" value="direct_bank" v-model="payment_method"> Direct Bank Tranfer</label>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="col-md-12">
											<div class="radio">
											   <label><input type="radio" name="optradio" class="mr-2" value="check_payment" v-model="payment_method"> Check Payment</label>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="col-md-12">
											<div class="radio">
											   <label><input type="radio" name="optradio" class="mr-2" value="paypal" v-model="payment_method"> Paypal</label>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="col-md-12">
											<div class="checkbox">
											   <label><input type="checkbox" value="read" class="mr-2" v-model="terms_conditions"> I have read and accept the terms and conditions</label>
											</div>
										</div>
									</div>
									<p><a href="javascript:;" class="btn btn-primary py-3 px-4" @click="placeorder()" >Place an order</a></p>
								</div>
	          	</div>
	          </div>
          </div> <!-- .col-md-8 -->
        </div>
      </div>
    </section> <!-- .section -->

    <section class="row py-5" v-if="!get_cart.length">
                <div class="col-md-12 text-center">
                    <h4>None products added yet</h4>
                    <p>Please add products to your cart in order to submit your order</p>
                </div>
    </section>
            
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            name:'',
            lastname:'',
            state:'',
            street:'',
            city:'',
            postcode:'',
            phone:'',
            emailAddress:'',
            create_account:false,
            total_amount:null,
            payment_method:'',
            terms_conditions:'',

        }
    },
    methods: {
        async placeorder(){
            
            let checkout_data ={
                name:this.name,
                lastname:this.lastname,
                state:this.state,
                street:this.street,
                city:this.city,
                postcode:this.postcode,
                phone:this.phone,
                emailAddress:this.emailAddress,
                create_account:this.create_account,
                total_amount:this.total,
                payment_method:this.payment_method,
                terms_conditions:this.terms_conditions,
            }


            if(!this.name && !this.lastname && !this.state && !this.street && !this.city && !this.postcode && !this.phone && !this.emailAddress && !this.create_account && !this.total_amount && !this.payment_method && !this.terms_conditions ){
                 const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(checkout_data)
            };
            const response = await fetch("http://localhost:3000/api/v1.0/order",requestOptions);
            const data = await response.json();

            console.log(data,'eree')
            }

           

     
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

}
</script>

<style>
     .transparent-banner{
        background-image: transparent !important;
        height: auto;
        background: none !important;

    }

</style>