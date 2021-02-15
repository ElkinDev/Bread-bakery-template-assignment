import { createStore } from 'vuex'

export default createStore({
  state: {
    //dato pass through components here,
    cart:[],
    productsl:"",
    products:[],
    deliveryfees:0,
    total:0,
    Discount:0,
    products_summary:[],
    purchase_summary:{}
  },
  mutations: {
    //synchrous to create methods   

    run_products_list(state,payload) {
      state.products.push(payload)
      state.productsl=payload
    },

    removeItemCart(state,payload){
      const index = state.cart.findIndex(x => x.id === payload);
      if (index !== undefined) state.cart.splice(index, 1);

      console.log('here the index',state.cart)
    },
    addToCart(state,payload) {
      var item = state.cart.find(x => x.id == payload.id);
      if (!item){
        payload.quantity=1
        return state.cart.push(payload);
      }else{

        return state.cart.find((x) =>{
          if(x.id == payload.id){
            console.log('heree',x.quantity)
            x.quantity=x.quantity+1
          }
        })

      }

      

    },

    calculate_total(state){
      state.total=state.cart.reduce(function (a, b) { // function(previousValue, currentValue)
          return {
            age: a.price + b.price, //select age in object array
          };
        });
    },

    setpurchase_review(state,payload){
      state.products_summary=state.cart
      state.cart=[]
      state.purchase_summary=payload
    }
  
  },
  actions: {
    // asyncronynous
    

    async load_products_list(state){
      

      const response = await fetch("http://localhost:3000/api/v1.0/productlist");
      const data = await response.json();
      state.commit("run_products_list",data)


     
    }



  },
  modules: {
  },
  getters:{
    get_products:(state)=>{
    return  state.productsl
    },
    get_total_cart: state => {
      let total= state.cart.reduce(function (a, b) { // function(previousValue, currentValue)
        return {
          total: a.price + b.price, //select age in object array
        };
      });

      return  total;
    },
    getNumberOfProducts: state => (state.cart) ? state.cart.length : 0,
    get_carts:state => state.cart,
    get_summary_cart_products:state =>state.products_summary,
    get_summary_cart_purchase:state =>state.purchase_summary,



     
  }
})
