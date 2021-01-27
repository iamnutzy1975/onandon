//Create a new component for product-details with a prop of details.
Vue.component('product-review', {
template: `
<input v-model="name">
`,
data() {
return {
name: null,
review: null,
rating: null
}}
}
)
Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
   <div class="product">

      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">
          <h1>{{ product }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>

          <product-details :details="details"></product-details>

          <div class="color-box"
               v-for="(variant, index) in variants"
               :key="variant.variantId"
               :style="{ backgroundColor: variant.variantColor }"
               @mouseover="updateProduct(index)"
               >
          </div>

          <button v-on:click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
          Add to cart
          </button>
            <button @click="removeFromCart"
              >
            Remove from cart
            </button>
      </div>
    </div>
   `,
  data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
          {
            variantId: 2234,
            variantColor: 'green',
            variantImage:  'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            variantQuantity: 10
          },
          {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
            variantQuantity: 0
          }
        ]
    }
  },
    methods: {
      addToCart: function() {
          this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId, true)
      },
      updateProduct: function(index) {
          this.selectedVariant = index
      },
      removeFromCart: function() {
        this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId, false)
      }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
          if (this.premium) {
            return "Free"
          }
            return 2.99
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
      premium: true,
      cart: []
    },
    methods: {
      updateCart(id,push) {
          if (push) {
          this.cart.push(id)
          }
          else {
          this.cart.pop(id)
          }

      },

    }
})