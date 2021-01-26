        var app = new Vue({
      el: '#app',
      data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        addinfolink: 'https://www.google.com',
        imageAltText: 'cool socks',
        inventory: 100,       //lowercase only
        goingFast: true,
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
        },
        updateProduct(vrntImg) {
            this.image = vrntImg
        },
        removeFromCart() {
            this.cart -= 1
        }

      }
})