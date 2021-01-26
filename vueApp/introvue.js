        var app = new Vue({
      el: '#app',
      data: {
        product: 'Socks',
        inStock: true,
        emptyCart: true,
        image: './assets/vmSocks-green-onWhite.jpg',
        addinfolink: 'https://www.google.com',
        imageAltText: 'cool socks',
        inventory: 10,
        goingFast: true,      //lowercase only
        onSale: true,
        details: ["80% cotton","20% polyester", "gender-neutral"],
        sizes: ["XL","L", "M", "S", "XS"],
        variants: [
        {
            variantId: 2234,
            variantColor: "green",
            variantImage: './assets/vmSocks-green-onWhite.jpg'
        },
                {
            variantId: 2235,
            variantColor: "blue",
            variantImage: './assets/vmSocks-blue-onWhite.jpg'
        }
        ],
      cart: 0
      },
      methods: {
        addToCart() {
            this.cart += 1
            this.inventory -= 1
            this.beforeMount()
        },
        updateProduct(vrntImg) {
            this.image = vrntImg
        },
        removeFromCart() {
            this.cart -= 1
            this.inventory += 1
            this.beforeMount()
        },
        beforeMount() {
            this.inStock = this.inventory > 0
            this.emptyCart = this.cart === 0
        }

      }
})