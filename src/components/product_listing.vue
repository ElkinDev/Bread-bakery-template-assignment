<template>
  
    <section class="ftco-section bg-light">
        <div class="container">
            <div class="row justify-content-center mb-3 pb-3">
            <div class="col-md-12 heading-section text-center ">
                <h1 class="big">{{title}}</h1>
                <h2 class="mb-4">{{subtitle}}</h2>
            </div>
        </div>
        </div>
    	<div class="container-fluid">

    		<div class="row" :class="[alignment ? 'center' : 'justify-content-center']" v-if="type=='MOST_VIEWED'" >
                <div class="col-sm col-md-6 col-lg-3"  v-for="product in list_products.slice(0, 3)" :key="product.id">
                            <div class="product" data-id="{{product.id}}" >
                            <a href="#" class="img-prod"><img class="img-fluid" :src="product.image_feature" :alt="product.title">
                                        <span class="status">{{product.metaTitle}}</span>
                            </a>
                            <div class="text py-3 px-3">
                                <h3><a href="#">{{product.title}}</a></h3>
                                <div class="d-flex">
                                    <div class="pricing">
                                                <p class="price">
                                                    <!-- <span class="mr-2 price-dc">$9.00</span> -->
                                                <span class="price-sale">${{product.price}}</span></p>
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
                                    <a href="javascript:;" @click="add_to_cart(product)" class="add-to-cart"><span>Add to cart <font-awesome-icon :icon="['fas', 'plus']" /></span></a>
                                    <a href="javascript:;" @click="add_to_favorites(product)" class="ml-auto"><font-awesome-icon :icon="['fas', 'heart']" /></a>
                                </p>
                            </div>
                        </div>
                </div>	
    	    </div>

            <div class="row" :class="[alignment ? 'center' : 'justify-content-center']" v-if="type=='SHOP'" >
                <div class="col-sm col-md-6 col-lg-3"  v-for="product in list_products" :key="product.id">
                            <div class="product" data-id="{{product.id}}" >
                            <a href="#" class="img-prod"><img class="img-fluid" :src="product.image_feature" :alt="product.title">
                                        <span class="status">{{product.metaTitle}}</span>
                            </a>
                            <div class="text py-3 px-3">
                                <h3><a href="#">{{product.title}}</a></h3>
                                <div class="d-flex">
                                    <div class="pricing">
                                                <p class="price">
                                                    <!-- <span class="mr-2 price-dc">$9.00</span> -->
                                                <span class="price-sale">${{product.price}}</span></p>
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
                                    <a href="javascript:;" @click="add_to_cart(product)" class="add-to-cart"><span>Add to cart <font-awesome-icon :icon="['fas', 'plus']" /></span></a>
                                    <a href="javascript:;" @click="add_to_favorites(product)" class="ml-auto"><font-awesome-icon :icon="['fas', 'heart']" /></a>
                                </p>
                            </div>
                        </div>
                </div>	
    	    </div>
    	</div>
    </section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    name:'productist',
    props: {
        type:String,
        title:String,
        subtitle:String,
        alignment:String,
    },

    data() {
        return {
            publicPath: process.env.BASE_URL
  
        }
    },
    methods: {
         add_to_cart(product){
             let product_send=product;
             this.$store.commit('addToCart', product_send)

            const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })

            Toast.fire({
            icon: 'success',
            title: 'Product added to cart',
            // html:'<a href="/Cart" >Go to cart</a>'
            })


        },
        add_to_favorites(product){
            console.log(product)
        }
        
        
    },
    computed: {
        list_products(){
            return this.$store.getters.get_products

        }


  },
   
    beforeMount() {
        
    },

}

</script>