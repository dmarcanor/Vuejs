const app = new Vue({
    el: "#app",
    data: {
        project: "Restaurant",
        version: 0.1,

        menu: [
            {
                foodName: "Pollo",
                price: 100000
            },
            {
                foodName: "Pizza",
                price: 120000
            },
            {
                foodName: "Ensalada",
                price: 80000
            }
        ],

        order: {
            food: new Array(),
            total: 0
        }
    },
    methods: {
        createFood: function() {
            this.menu.push(
                {
                    foodName: this.menu.foodName,
                    price: this.menu.price
                }
            )
            this.clearForm()
        },

        clearForm: function() {
            this.menu.foodName = ""
            this.menu.price = 0
            console.log("clear")
        },

        addOrder: function(item){
            var obj = {
                foodName: item.foodName,
                price: item.price,
                quantity: 1
            }

            if(this.isItemRepeated(item)){
                return this.getItemRepeated(item).quantity++;
            }

            this.order.food.push(obj)
        },

        getItemRepeated: function(item){
            return this.order.food.find(element => element.foodName === item.foodName);
        },

        isItemRepeated: function(item){
            return this.order.food.find(element => element.foodName === item.foodName) != null ? true : false;
        },

        getTotal: function(){
            var total=0

            this.order.food.forEach(element => {
                total += (element.price * element.quantity)
            });

            return total;
        },

        submitOrder: function(){
            alert("Orden enviada")
            this.setOrderAsEmpty()
        },

        setOrderAsEmpty: function(){
            return this.order.food = []
        }
    }
});