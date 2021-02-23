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
	<section class="ftco-section pt-0" v-if="get_cart.length" id="form">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8 ">
			  <form action="#" class="billing-form bg-light p-3 p-md-5">
							<h3 class="mb-4 billing-heading">Billing Details</h3>
	          	<div class="row align-items-end">
	          		<div class="col-md-6">
	                <div class="form-group">
	                	<label for="firstname">Firt Name</label>
						<div class="input-group">
							<input type="text" class="form-control" name="name" ref="name" v-model="name" placeholder="">
						
						</div>
	                </div>
	              </div>
	              <div class="col-md-6">
	                <div class="form-group">
	                	<label for="lastname">Last Name</label>
						<div class="input-group">
	                 	 	<input type="text" class="form-control" name="lastname" ref="lastname" v-model="lastname" placeholder="">
						</div>
	                </div>
                </div>
                <div class="w-100"></div>
		            <div class="col-md-12">
		            	<div class="form-group">
		            		<label for="country">State / Country <br> <small>Purchases only available in Australia for now.</small></label>
							<div class="input-group">

								<div class="select-wrap">
									<div class="icon"><span class="ion-ios-arrow-down"></span></div>
									<select name="country"  class="form-control" ref="state" v-model="state">
										<option value="" disabled selected>select one</option>
										<option value="Australia" >Australia</option>
									</select>
								</div>
		                	</div>
		            	</div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
		            	<div class="form-group">
	                	<label for="streetaddress">Street Address</label>
						<div class="input-group">

	                  		<input type="text" class="form-control" ref="address" name="address" v-model="address" placeholder="House number and street name">
						</div>
	                </div>
		            </div>
		            <div class="col-md-6">
		            	<div class="form-group">
							<div class="input-group">
	                 		 <input type="text" class="form-control" ref="optional" name="optional" v-model="optional_address" placeholder="Appartment, suite, unit etc: (optional)">
							</div>
	                </div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
		            	<div class="form-group">
	                	<label for="towncity">Town / City</label>
						<div class="input-group">
	                  <input type="text" class="form-control" ref="city" name="city" placeholder="" v-model="city">
					  </div>
	                </div>
		            </div>
		            <div class="col-md-6">
		            	<div class="form-group">
		            		<label for="postcodezip">Postcode / ZIP *</label>
						<div class="input-group">
	                  		<input type="text" class="form-control" ref="postcode" name="postcode" placeholder="" v-model="postcode">
					  	</div>
	                </div>
		            </div>
		            <div class="w-100"></div>
		            <div class="col-md-6">
	                <div class="form-group">
	                	<label for="phone">Phone</label>
						<div class="input-group">
	                  		<input type="text" class="form-control" ref="phone" name="phone" placeholder="" v-model="phone">
					  	</div>
	                </div>
	              </div>
	              <div class="col-md-6">
	                <div class="form-group">
	                	<label for="emailaddress">Email Address</label>
						<div class="input-group">
	                  		<input type="email" class="form-control" ref="email" name="email" placeholder="" v-model="emailAddress">
					  	</div>
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
	          	</div>
	          	<div class="col-md-6">
	          		<div class="cart-detail bg-light p-3 p-md-4">
	          			<h3 class="billing-heading mb-4">Payment Method</h3>
									<div class="form-group">
										<div class="col-md-12">
											<div class="radio">
											   <label><input type="radio" ref="payment_method" name="optradio" class="mr-2" value="direct_bank" v-model="payment_method"> Direct Bank Tranfer</label>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="col-md-12">
											<div class="radio">
											   <label><input type="radio" ref="payment_method" name="optradio" class="mr-2" value="check_payment" v-model="payment_method"> Check Payment</label>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="col-md-12">
											<div class="radio">
											   <label><input type="radio" ref="payment_method" name="optradio" class="mr-2" value="paypal" v-model="payment_method"> Paypal</label>
											</div>
										</div>
									</div>

										   <div class=" " v-if="!payment_method && submmited" >

												   <div class="invalid-feedback d-block">
												   		Accept terms and conditions
													</div>
											</div>
									<div class="form-group">
										<div class="col-md-12">
											<div class="checkbox">
											   <label><input type="checkbox" ref="read"  value="read" class="mr-2" :checked="read" @click.prevent="handleSelect"> I have read and accept the terms and conditions</label>

											   <div class="" v-if="!read && submmited" >

												   <div class="invalid-feedback d-block">
												   		Accept terms and conditions
													</div>
												</div>
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
import {scroller} from 'vue-scrollto/src/scrollTo'
import Swal from 'sweetalert2'
const firstScrollTo = scroller()

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
			read:false,
			submmited:false,

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

			this.submmited=true;




            if(this.read){

                if(this.name !="" && this.lastname !="" && this.state !="" && this.address !="" && this.city !="" && this.postcode !="" && this.phone !="" && this.emailAddress !="" && this.total_amount !="" && this.payment_method !="" ){
				this.input_validation()
				
                const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(checkout_data)
                };
                const response = await fetch("https://dbshoppingcartnodejs.herokuapp.com/api/v1.0/order",requestOptions);
				const data = await response.json();
				

				console.log('this is the data again',data)

				this.asyncpops_modal("Excellent","Orden has been placed succesfully ","success","checkout_success",data)
	

				console.log('pass through again')

			
				setTimeout(() => {
				console.log('got it in here')

					this.$store.commit('setpurchase_review', checkout_data)
					this.$router.push('/purchase-summary/' + data.data.insertId); 
					checkout_data={}
				}, 2000);


                }else{
					this.input_validation()
				}

            }else{
				
				this.asyncpops_modal("Oops","please fill out the form to place the order","error","checkout_error")
				



            }     
        },

        handleSelect(){
            setTimeout(() => {
                         this.read = !this.read;
            })

		},
		
		input_validation(){
					let input='';
					
                if (this.name=="") {
					
					let error_alert = document.createElement("div");
					error_alert.classList.add('invalid-feedback')
					error_alert.innerHTML = "Required";

					input=this.$refs["name"]
					input.classList.add('is-invalid')
					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}

					input.parentNode.append(error_alert)
					
				
				}else{
					input=this.$refs["name"]
					input.classList.remove('is-invalid')

					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}

				}
				if (this.lastname== ""){
					let error_alert = document.createElement("div");
					error_alert.classList.add('invalid-feedback')
					error_alert.innerHTML = "Required";

					input=this.$refs["lastname"]
					input.classList.add('is-invalid')
					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}
					input.parentNode.append(error_alert)

				}else{

					input=this.$refs["lastname"]
					input.classList.remove('is-invalid')

					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}

				}
				if (this.state==""){
					let error_alert = document.createElement("div");
					error_alert.classList.add('invalid-feedback')
					error_alert.innerHTML = "Required";
					input=this.$refs["state"]
					input.classList.add('is-invalid')
					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}
					input.parentNode.append(error_alert)

				}else{

					input=this.$refs["state"]
					input.classList.remove('is-invalid')

					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}

				}
				if(this.address==""){
					let error_alert = document.createElement("div");
					error_alert.classList.add('invalid-feedback')
					error_alert.innerHTML = "Required";
					input=this.$refs["address"]
					input.classList.add('is-invalid')
					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}

					input.parentNode.append(error_alert)

				}else{
					input=this.$refs["address"]
					input.classList.remove('is-invalid')

					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}

				}
				if(this.city==""){
					let error_alert = document.createElement("div");
					error_alert.classList.add('invalid-feedback')
					error_alert.innerHTML = "Required";
					input=this.$refs["city"]
					input.classList.add('is-invalid')
					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}

					input.parentNode.append(error_alert)

				}else{
					input=this.$refs["city"]
					input.classList.remove('is-invalid')

					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}

				}
				if(this.postcode==""){
					let error_alert = document.createElement("div");
					error_alert.classList.add('invalid-feedback')
					error_alert.innerHTML = "Required";
					input=this.$refs["postcode"]
					input.classList.add('is-invalid')
					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}
					input.parentNode.append(error_alert)

				}else{
					input=this.$refs["postcode"]
					input.classList.remove('is-invalid')

					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}
				}
				if(this.phone==""){
					let error_alert = document.createElement("div");
					error_alert.classList.add('invalid-feedback')
					error_alert.innerHTML = "Required";
					input=this.$refs["phone"]
					input.classList.add('is-invalid')
					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}
					input.parentNode.append(error_alert)

				}else{
					input=this.$refs["phone"]
					input.classList.remove('is-invalid')

					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}
				}
				if(this.emailAddress==""){
					let error_alert = document.createElement("div");
					error_alert.classList.add('invalid-feedback')
					error_alert.innerHTML = "Required";
					input=this.$refs["email"]
					input.classList.add('is-invalid')
					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}
					input.parentNode.append(error_alert)

				}else{
					input=this.$refs["email"]
					input.classList.remove('is-invalid')

					if(input.parentNode.querySelector('.invalid-feedback')){
						input.parentNode.querySelector('.invalid-feedback').remove()
					}
				}
		},

		asyncpops_modal(title,text,type,form,data){

			if(form==="checkout_error"){

				Swal.fire({
				position: 'top-center',
				icon: type,
				text: text,
				title:title,
				showConfirmButton: true,
				}).then((result) => {
					if (result.isConfirmed) {
							this.input_validation()
							firstScrollTo('#form')

					}else{
							this.input_validation()
							firstScrollTo('#form')

					}
				})
				

			}else if(form==="checkout_success"){

				Swal.fire({
				icon: type,
				text: text,
				title:title,
				timer: 3000,
				html:
				'Your order id is <b> number # :' +data.data.insertId+' </b>, ' +
				'you will see your purchase details soon ',
				timerProgressBar: true,
				showConfirmButton: false,

				})
			}
			
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

	.input-group .invalid-feedback{
		position: absolute;
		bottom: 5px;
		left: 5px;
	}

</style>