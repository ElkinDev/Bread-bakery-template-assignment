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



	<div class="form-group" :class="{ 'form-group--error': $v.fieldA.$error }">
    <label class="form__label">Field A</label>
    <input class="form__input" v-model.trim="$v.fieldA.$model"/>
  </div>
  <div class="error" v-if="!$v.fieldA.required">Field A is required.</div>
  <div class="error" v-if="!$v.fieldA.minLength">Field A must have at least {{$v.fieldA.$params.minLength.min}} letters.</div>
  <div class="form-group" :class="{ 'form-group--error': $v.fieldB.$error }">
    <label class="form__label">Field B</label>
    <input class="form__input" v-model.trim="$v.fieldB.$model"/>
  </div>
  <div class="error" v-if="!$v.fieldB.required">Field B is required.</div>
  <div class="error" v-if="!$v.fieldB.minLength">Field B must have at least {{$v.fieldB.$params.minLength.min}} letters.</div>
  <div class="form-group">
    <button class="button" @click="$v.$reset">$reset</button>
  </div>



  
	<section class="ftco-section pt-0" v-if="get_cart.length">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 ">
			  <form action="#" class="billing-form bg-light p-3 p-md-5">
							<h3 class="mb-4 billing-heading">Billing Details</h3>
	          	<div class="row align-items-end">
	          		<div class="col-md-6">
	                <div class="form-group" :class="{ 'form-group--error': $v.fieldA.$error }">
	                	<label for="firstname">Firt Name</label>
	                  <input type="text" class="form-control" name="name" v-model.trim="$v.fieldA.$model" placeholder="">
	                </div>
	              </div>
	              <div class="col-md-6">
	                <div class="form-group">
	                	<label for="lastname">Last Name</label>
	                  <input type="text" class="form-control" name="lastname" v-model="lastname" placeholder="">
	                </div>
                </div>
                <div class="w-100"></div>
		            <div class="col-md-12">
		            	<div class="form-group">
		            		<label for="country">State / Country <br> <small>Purchases only available in Australia for now.</small></label>
		            		<div class="select-wrap">
		                  <div class="icon"><span class="ion-ios-arrow-down"></span></div>
		                  <select name="country"  class="form-control" v-model="state">
		                  	<option value="" disabled selected>select one</option>
		                  	<option value="Australia" >Australia</option>
		                  </select>
		                </div>
		            	</div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
		            	<div class="form-group">
	                	<label for="streetaddress">Street Address</label>
	                  <input type="text" class="form-control" name="address" v-model="address" placeholder="House number and street name">
	                </div>
		            </div>
		            <div class="col-md-6">
		            	<div class="form-group">
	                  <input type="text" class="form-control" name="optional" v-model="optional_address" placeholder="Appartment, suite, unit etc: (optional)">
	                </div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
		            	<div class="form-group">
	                	<label for="towncity">Town / City</label>
	                  <input type="text" class="form-control" name="city" placeholder="" v-model="city">
	                </div>
		            </div>
		            <div class="col-md-6">
		            	<div class="form-group">
		            		<label for="postcodezip">Postcode / ZIP *</label>
	                  <input type="text" class="form-control" name="postcode" placeholder="" v-model="postcode">
	                </div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
	                <div class="form-group">
	                	<label for="phone">Phone</label>
	                  <input type="text" class="form-control" name="phone" placeholder="" v-model="phone">
	                </div>
	              </div>
	              <div class="col-md-6">
	                <div class="form-group">
	                	<label for="emailaddress">Email Address</label>
	                  <input type="email" class="form-control" name="email" placeholder="" v-model="emailAddress">
	                </div>
                </div>
                <div class="w-100"></div>
                <div class="col-md-12">
                	<div class="form-group mt-4">
							<div class="radio">
										  <label class="mr-3"><input type="radio" name="optradio" :value="true" v-model="create_account"> Create an Account? </label>
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
											   <label><input type="checkbox" value="read" class="mr-2" :checked="read" @click.prevent="handleSelect"> I have read and accept the terms and conditions</label>
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
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            name:'',
            lastname:'',
            state:'',
            address:'',
            city:'',
            postcode:'',
            phone:'',
            emailAddress:'',
            create_account:false,
            total_amount:null,
            payment_method:'',
            terms_conditions:'',
            optional_address:'',
            read:false

        }
    },
    methods: {
        async placeorder(){
            
            let checkout_data ={
                name:this.name,
                lastname:this.lastname,
                state:this.state,
                address:this.address,
                city:this.city,
                postcode:this.postcode,
                phone:this.phone,
                emailAddress:this.emailAddress,
                total_amount:this.total,
                payment_method:this.payment_method,
                create_account:this.create_account,
                optional_address:this.optional_address,
                products:[]
            }


            checkout_data.products=this.get_cart



            if(this.read){
                if(this.name !="" && this.lastname !="" && this.state !="" && this.address !="" && this.city !="" && this.postcode !="" && this.phone !="" && this.emailAddress !="" && this.total_amount !="" && this.payment_method !="" ){
                 const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(checkout_data)
                };
                const response = await fetch("http://localhost:3000/api/v1.0/order",requestOptions);
                const data = await response.json();

                console.log(data,'eree')
                }

            }else{
                alert('please accept terms and conditions.')
            }     
        },

        handleSelect(){
            setTimeout(() => {
                         this.read = !this.read;
            })

        },
      
	},
	
	validations: {

		 name:{
			 required,
		minLength: minLength(3)
		 },

            lastname:{
				required,
				minLength: minLength(3)
			},
            state:{
				required,
			},
            address:{
				required,
			minLength: minLength(3)
			},
            city:{
				required,
			},
            postcode:{
				required,
				minLength: minLength(5)
			},
            phone:{
				required,
				minLength: minLength(8)
			},
            emailAddress:{
				required,
				minLength: minLength(3)
			},

            payment_method:{
				required
			},
            terms_conditions:{
				required
			},
		fieldA: {
		required,
		minLength: minLength(3)
		},
		fieldB: {
		required,
		minLength: minLength(3)
		}
  	},
    
    computed:{
		 ...mapGetters({
      products: 'get_carts'
    	}),
        get_cart(){
	
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