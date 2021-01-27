        var app = new Vue({
      el: '#app',
      data: {
        brand: 'VueMastery',
        product: 'Socks',
        selectedVariant: 0,
        addinfolink: 'https://www.google.com',
        imageAltText: 'cool socks',
        inventory: 10,
        onSale: true,       //lowercase only
        details: ["80% cotton","20% polyester", "gender-neutral"],
        sizes: ["XL","L", "M", "S", "XS"],
        variants: [
        {
            variantId: 2234,
            variantColor: "green",
            variantImage: './assets/vmSocks-green-onWhite.jpg',
            variantQuantity: 0
        },
                {
            variantId: 2235,
            variantColor: "blue",
            variantImage: './assets/vmSocks-blue-onWhite.jpg',
            variantQuantity: 10
        }
        ],
      cart: 0
      },
      methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(idx) {
            this.selectedVariant = idx
        },
        removeFromCart() {
            this.cart -= 1
        }

      },
      computed:{
        title() {
            return this.brand + ' ' + this.product
        },
        availability() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        emptyCart() {
            return this.cart === 0
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        sale() {
            if (this.onSale) {
                return this.title + ' are on sale!'
            }
            return this.title + ' are NOT on sale!'
        }
      }
})